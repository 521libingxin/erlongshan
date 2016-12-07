// Imports like relative paths
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs/Rx';

import { IcService } from '../service/intercomm.service';
import { NavService } from '../service/navigation.service';
import { domIdObserver } from '../service/helper-functions';
import { EditedFileService } from '../service/edited-file.service';

import { DummyElement, ElementTypes } from '../model/element';
import { TextElement } from '../model/text-element';
import { CompositeElement } from '../model/composite-element';
import { fonts } from '../model/font';
import { loadFile, getElementrenderByName, setDateStringContent, insertNewElement, setElementFont, setStringContent } from '../model/plugin-request';

// TODO there isno immediate need for wrapping this in TS interfaces. It is only used here.
var X2JS = require('x2js');

//templateUrl and style properties like absolute paths from project root
@Component({
	selector: 'editor',
	templateUrl: 'htmltemplate/editortemplate.html',
	providers: [IcService],
})
// TODO check for uniqueness of names in CILF files
export class EditorComponent implements OnInit, OnDestroy {
	mode = 'Observable';
	imageContent: string[] = Array<string>();
	errorMessage: string;
	canvasElement: any;
	isElementSelected: boolean = false;
	heightInPx: number;
	// pixel size
	gridScale: number;
	parseString: any;
	contents: any = {};
	topLevelElement: CompositeElement;
	inputText: string = "";
	timeElements: CompositeElement[] = Array<CompositeElement>();

	isElementEngaged: boolean = false;
	selectedElement: CompositeElement;
	selectedElementTop;
	selectedElementLeft;
	initEventX;
	initEventY;
	heightLimit: number;
	widthLimit: number;

	timer: Observable<number>;
	timerSubscription: Subscription;

	fontList: any = fonts;
	selectedFont: string;
	xJsCoverter: any;



	constructor(private icservice: IcService,
		private route: ActivatedRoute,
		private navservice: NavService,
		private location: Location,
		private editedFileService: EditedFileService) {
		// TODO replace this hardcoded data with a value composited form print area height and cilf height
		this.heightInPx = 24;
		this.selectedFont = "";
		this.topLevelElement = new CompositeElement(DummyElement);
	}
	ngOnInit() {

		this.xJsCoverter = new X2JS()

		// Get a handler for canvas div

		domIdObserver("canvas").then(
			(resolve: any) => {
				this.canvasElement = resolve;
				this.calculatePixelScale();
				// Fetch a manifest of CILF elements and contents
				this.icservice.remoteProcedureCallforPlugin(loadFile, [this.editedFileService.currentEditedPath, this.editedFileService.currentEditedName]).subscribe(

					(res: any) => {
						var jsonObj = this.xJsCoverter.xml2js(res.Label);
						//console.log(jsonObj)
						// Recursively assigns elements into locally defined typed data
						this.topLevelElement = new CompositeElement(jsonObj.label.layout.channel.segment.compositeElement);
						//console.log(this.topLevelElement);
						this.parseContent(jsonObj.label);
						//console.log(this.contents)


						// Find timestamp related content
						let timeContent: any[] = Array<any>();
						for (let key in this.contents) {
							for (let key2 in this.contents[key]) {
								if (this.contents[key][key2].transformFunction == "FormatTime") {
									timeContent.push(this.contents[key][key2]);
								}
							}
						}
						// Find ContentElements that are related to timestamps and make a regular update list
						for (let key in this.topLevelElement.structuralChildren) {
							for (let key2 in timeContent) {
								if (this.topLevelElement.structuralChildren[key].visualChildren[0].contentId == timeContent[key2]["_id"]) {
									this.timeElements.push(this.topLevelElement.structuralChildren[key]);
								}
							}
						}
						this.populateCanvas();
					},
					(error) => {
						console.log(error)
					}
				);
			},
			(reject: string) => {
				console.log(reject);
			}
		);

		this.timer = Observable.timer(500, 1000);
		// TODO remove this timer later on
		this.timerSubscription = this.timer.subscribe(t => {
			this.refreshOnlyTimestamps();
		});

		this.route.url.subscribe(
			urlList => {
				this.navservice.setCurrentPath(urlList)
			}
		)


	}

	ngOnDestroy() {
		this.timerSubscription.unsubscribe();
	}
	dragDropDisablerDummy() { return false; }

	parseContent(label: any) {
		// iterate through top level elements
		for (let key in label) {
			// if the object is not an array...
			if (Object.prototype.toString.call(label[key]) != '[object Array]') {
				// ...and has an _id property
				if (label[key]["_id"] != undefined) {
					// create a new vector with one element and push into content object
					this.contents[key] = [label[key]];
				}
			}
			// If the object is an array...
			else {
				// TODO this is a hack: check the first element to see if it has an id, maybe this is not true in all cases
				if (label[key][0]["_id"] != undefined) {
					// then do another level of iteration
					let arr = [];
					for (let key2 in label[key]) {
						// If elements of array have property _id, push them into temp array object					
						if (label[key][key2]["_id"] != undefined) {
							arr.push(label[key][key2])
						}
					}
					this.contents[key] = arr;
				}

			}
		}
	}



	// TODO If the time updates do not need simulation, there is no point in setting the date manually, so refactor this function at that time
	refreshOnlyTimestamps() {
		let date = new Date();

		// TODO code duplication
		let dateString = date.getFullYear().toString() + "-" + (("0" + ((date.getMonth() + 1).toString())).slice(-2)) + "-" + ("0" + (date.getDate().toString())).slice(-2) + "T" + (("0" + ((date.getHours()).toString())).slice(-2)) + ":" + (("0" + ((date.getMinutes()).toString())).slice(-2)) + ":" + (("0" + ((date.getSeconds()).toString())).slice(-2));
		//console.log(this.timeElements);
		for (let key in this.timeElements) {
			// TODO reassigning the key to a scoped string should be a bad idea, learn how to do this properly
			let localKey = key;
			this.icservice.remoteProcedureCallforPlugin(setDateStringContent, [this.timeElements[key].visualChildren[0].contentId, dateString]).subscribe(
				(res: any) => {
					let subKey = localKey;
					this.icservice.remoteProcedureCallforPlugin(getElementrenderByName, [this.timeElements[subKey].name]).subscribe(
						(res: any) => {
							this.timeElements[subKey].src = "data:image/png;base64," + res.Image;
							this.timeElements[subKey].height = res.Height;
							this.timeElements[subKey].width = res.Width;
						},
						(error) => {

						}
					)
				},
				(error) => {

				}

			);



		}
	}

	// TODO adding a elemnt breaks the auto update
	addText(id: string, isDate: boolean) {
		// TODO is this really alright? maybe I should overwrite some properties
		let newElement = new CompositeElement(this.topLevelElement.structuralChildren[0]);
		newElement.visualChildren = this.topLevelElement.structuralChildren[0].visualChildren;


		// iterate existing names to increment end number
		let highestName = 0;
		let highestId = 0;
		for (var key in this.topLevelElement.structuralChildren) {
			// Extract the numeric part of element name
			let instance = this.topLevelElement.structuralChildren[key].name.match(/\d+$/);
			// Find the highest value of vector
			if (instance[0] && Number(instance[0]) > highestName) {
				highestName = Number(instance[0]);
			}

		}
		for (var key in this.contents) {
			for (var key2 in this.contents[key]) {
				// Remove the leading zeroes from contentId
				let instanceID = this.contents[key][key2]["_id"].replace(/\b0+/, "");
				// Find the highest value of vector
				if (instanceID[0] && Number(instanceID[0]) > highestId) {
					highestId = Number(instanceID[0]);
				}
			}
		}
		//increment both by one
		// TODO CODE DUPLICATION
		highestId++; // date string
		highestName++;
		let highestIdSrc //date mask
		if (isDate) {
			// increment once more for em

			highestIdSrc = highestId + 1;
		} else {
			highestIdSrc = 0;
		}
		// add leading zeroes to contentId
		let newId = "00000000" + highestId.toString();
		// Slice rightmost 8 characters to get rid of extra 0s
		newId = newId.slice(-8);

		let newId2 = "00000000" + highestIdSrc.toString();
		newId2 = newId2.slice(-8);

		// Create the name of the new element
		let newName = "Text " + highestName.toString();



		newElement.name = newName;
		console.log(newElement)
		newElement.visualChildren[0].contentId = newId;

		let date = new Date();
		// TODO code duplication
		let dateString = date.getFullYear().toString() + "-" + (("0" + ((date.getMonth() + 1).toString())).slice(-2)) + "-" + (("0" + date.getDate().toString()).slice(-2)) + "T" + (("0" + ((date.getHours()).toString())).slice(-2)) + ":" + (("0" + ((date.getMinutes()).toString())).slice(-2)) + ":" + (("0" + ((date.getSeconds()).toString())).slice(-2));


		// TODO this might come in handy: newElement.setAttribute("tabindex", "0")
		this.icservice.remoteProcedureCallforPlugin(insertNewElement, [newName, newId, newId2, (isDate ? this.dateParser(this.inputText) : this.inputText), isDate]).subscribe(
			(res: any) => {
				//console.log("insertnewelement:" + res);
				this.icservice.remoteProcedureCallforPlugin(getElementrenderByName, [newName]).subscribe(
					(res: any) => {
						newElement.src = "data:image/png;base64," + res.Image
						newElement.xPosition = 0;
						newElement.xPositionOld = 0;
						newElement.yPosition = 0;
						newElement.yPositionOld = 0;
						newElement.height = +res.Height;
						newElement.width = +res.Width;
						this.topLevelElement.structuralChildren.push(newElement);

						// TODO this functionality is parallel implemented in server which will probably result in inconsistent displays. Make sure server mirrors the client

						console.log(this.contents);
						if (isDate) {
							/*
							this.contents.transformContent.push(this.contents.transformContent[0])
							let lastitem = this.contents.transformContent[this.contents.transformContent.length - 1];
							*/
							for (let key in this.contents.transformContent) {
								for (let key2 in this.contents.transformContent[key].parameter) {
									if (this.contents.transformContent[key].parameter[key2].parameterName == "FormatString") {
										// TODO replace with a proper copy constructor
										let copy = JSON.parse(JSON.stringify(this.contents.transformContent[key]));
										copy["_id"] = newId;
										copy.input = newId2;
										copy.parameter[key2].value.string = this.dateParser(this.inputText);
										this.contents.transformContent.push(copy);
										break;
									}
								}
							}
							for (let key in this.contents.nonQueriedContent) {

								if (this.contents.nonQueriedContent[key].dataSource["_name"] == "current time") {
									// TODO replace with a proper copy constructor
									let copy = JSON.parse(JSON.stringify(this.contents.nonQueriedContent[key]))
									copy["_id"] = newId2;
									copy.dataSource.dataFormat.dateTime = dateString;
									this.contents.nonQueriedContent.push(copy)
									break;
								}

							}
						}
						else {
							this.contents.staticContent.push(this.contents.staticContent[0])
							this.contents.staticContent[this.contents.staticContent.length - 1].value.string = this.inputText;
						}

						console.log(this.contents);

					},
					(error) => {

					});

			},
			(error) => {

			});
	}

	onFontChange() {
		this.icservice.remoteProcedureCallforPlugin(setElementFont, [this.selectedElement.name, this.selectedFont]).subscribe(
			(res: any) => {
				//console.log(res);
				this.icservice.remoteProcedureCallforPlugin(getElementrenderByName, [this.selectedElement.name]).subscribe(
					(res: any) => {
						this.selectedElement.src = "data:image/png;base64," + res.Image;
					},
					(error) => {
						console.log(error)
					});
			},
			(error: any) => {

			}
		);
	}

	// Fetches the image data for each element
	populateCanvas() {
		//console.log(this.topLevelElement)
		for (let key in this.topLevelElement.structuralChildren) {
			let index = key;
			this.icservice.remoteProcedureCallforPlugin(getElementrenderByName, [this.topLevelElement.structuralChildren[index].name]).subscribe(
				(res: any) => {
					this.topLevelElement.structuralChildren[index].src = "data:image/png;base64," + res.Image;
				},
				(error) => {
					console.log(error)
				}

			);
		}
	}

	onResize($event) {
		// TODO improve this size check
		if ($event.srcElement.innerWidth > 800) {
			let gridScale_old = this.gridScale;
			// TODO the multiplier 0.2 down there should be equivalent to "div#canvas {height: 20vw;}" element in CSS
			// Divide total height by amount of desired pixels to find a fractional grid scale
			let repPixelSize = (window.innerWidth * 0.2) / this.heightInPx;

			let intPixelSize = Math.floor(repPixelSize);
			this.gridScale = intPixelSize;
			//TODO do not calculate and assign if boundary is not crossed, change check on gridscale shouls be cheaper
			this.canvasElement.style.height = (this.gridScale * this.heightInPx).toString() + "px";
			this.canvasElement.style.width = (this.gridScale * this.heightInPx * 4).toString() + "px";

		}


	}



	// TODO This one should iterate through the list of elements and re render ALL elements of same id. Now only last in list is modified because "let local" is not instanced for loop iterations.
	setStringContent(id: string) {
		//console.log(this.elements[selectedElement.id])
		domIdObserver(id).then(
			(resolve: any) => {
				//console.log(resolve.value)
				//console.log(this.dateParser(resolve.value))
				let id = this.selectedElement.visualChildren[0].contentId;
				let isDate: boolean;

				for (let key in this.contents) {
					for (let key2 in this.contents[key]) {

						if (this.contents[key][key2]["_id"] == id) {
							if (key == "staticContent") {
								isDate = false;
							}
							else if (this.contents[key][key2].transformFunction == "FormatTime") {
								isDate = true;
							}
							else {
								console.log("Op not supported for this element type.")
							}
							break;
						}
					}
				}
				this.icservice.remoteProcedureCallforPlugin(setStringContent, [this.selectedElement.visualChildren[0].contentId, (isDate ? this.dateParser(resolve.value) : resolve.value), isDate.toString()]).subscribe(
					(res: any) => {
						//console.log(res)
						this.icservice.remoteProcedureCallforPlugin(getElementrenderByName, [this.selectedElement.name]).subscribe(
							(res: any) => {
								this.selectedElement.src = "data:image/png;base64," + res.Image;
								this.selectedElement.width = res.Width;
								this.selectedElement.height = res.Height;
							},
							(error) => {
								console.log(error);
							});
					},
					(error) => {
						console.log(error);
					}
				);
			},
			(reject: string) => {
				console.log(reject);
			}
		);
	}

	dateParser(dateString: string): string {

		let result = dateString.match(/{.*}/);
		let token: string = result[0].slice(1, -1);
		let tokens = token.split(":");
		//console.log(tokens)
		let newString: string = "";
		while (tokens.length > 0) {
			let item = tokens.shift()

			if (item == "HH") {
				newString += "%CLK_HH%:"
			}
			else if (item == "mm") {
				newString += "%CLK_mm%:"
			}
			else if (item == "ss") {
				newString += "%CLK_ss%:"
			}
		}
		newString = newString.slice(0, -1)
		return newString;

	}

	calculatePixelScale() {
		let repPixelSize
		if (window.innerWidth > 800) {
			// Divide total height by amount of desired pixels to find a fractional grid scale
			repPixelSize = this.canvasElement.offsetHeight / this.heightInPx;
		}
		else {
			repPixelSize = 80 / this.heightInPx;

		}

		let intPixelSize = Math.floor(repPixelSize);
		this.canvasElement.style.height = (intPixelSize * this.heightInPx).toString() + "px"
		this.canvasElement.style.width = (intPixelSize * this.heightInPx * 4).toString() + "px"
		this.gridScale = intPixelSize;
		// console.log(this.gridScale)
	}

	// This one collects data from individual divs inside the #canvas <div>.
	// note: event calls are weird and wonky depending on the browser implementation,
	// therefore storing arbitrary user input values (here mouse coordinates) supplied
	// by an event object does not make sense. It makes sense however to store
	// data about initial DOM values and their relation to user input values.
	onMouseDown($event) {

		$event.preventDefault();
		//console.log("onMouseDownCalled")

		if (this.selectedElement) {
			this.selectedElement.outline = "";
			//console.log("called");
		}


		//match element name with the originating DOM element, TODO also check for event origin tag name
		for (var key in this.topLevelElement.structuralChildren) {
			let i = this.topLevelElement.structuralChildren[key]
			if (i.name === $event.srcElement.id) {
				this.selectedElement = i;
				this.selectedElement.outline = "red 1px solid";
				this.isElementEngaged = true;
				// Set a fixed position to calculate displacement relative to cursor's initial pos
				this.initEventX = $event.pageX;
				this.initEventY = $event.pageY;
				// Set a fixed position to calculate displacement relative to object's initial pos
				i.xPositionOld = i.xPosition;
				i.yPositionOld = i.yPosition;
				// Set kinematic limits
				let sourceDomNode = $event.srcElement;
				this.heightLimit = sourceDomNode.parentElement.offsetHeight - sourceDomNode.offsetHeight;
				this.heightLimit = this.heightLimit / this.gridScale;
				this.heightLimit = Math.floor(this.heightLimit);
				this.widthLimit = sourceDomNode.parentElement.offsetWidth - sourceDomNode.offsetWidth;
				this.widthLimit = this.widthLimit / this.gridScale;
				this.widthLimit = Math.floor(this.widthLimit);
				break;
			}
		}

	}



	// Subtracts initial offset values from current corrdinates to find the new <div>
	onMouseMove($event) {
		//console.log("MOUSEMOVE");
		// Only gets called if some element is selected


		if (this.isElementEngaged) {
			//console.log("EngagedonMouseMoveCalled")
			let distance: number;
			let newTop: number;
			let newLeft: number;

			// Calculate the moved distance, scale down to logical CILF coords 
			distance = $event.pageY - this.initEventY;
			distance /= this.gridScale;
			distance = Math.floor(distance);
			// Add moved distance to initial coordinate position to find new coordinate
			newTop = this.selectedElement.yPositionOld + distance;
			// Calculate the moved distance, scale down to logical CILF coords 
			distance = $event.pageX - this.initEventX;
			distance = distance / this.gridScale;
			distance = Math.floor(distance);
			// Add moved distance to initial coordinate position to find new coordinate
			newLeft = this.selectedElement.xPositionOld + distance;

			// Check kinematic limits
			//TODO This could get smarter
			if (newTop < this.heightLimit && newTop > -1) {
				this.selectedElement.yPosition = Math.floor(newTop);
			}
			if (newLeft < this.widthLimit && newLeft > -1) {
				this.selectedElement.xPosition = Math.floor(newLeft);
			}
			// Behaviour on boundary conditions
			if (newTop >= this.heightLimit + 1) {
				this.selectedElement.yPosition = this.heightLimit;
			}
			if (newLeft >= this.widthLimit + 1) {
				this.selectedElement.xPosition = this.widthLimit;
			}
			if (newTop <= -1) {
				this.selectedElement.yPosition = 0;
			}
			if (newLeft <= -1) {
				this.selectedElement.xPosition = 0;
			}
		}
	}


	onMouseUp($event) {
		//console.log("ONMOUSEUPCALLED")
		// This prevents random clicks around the surface from calling the service
		if (this.isElementEngaged) {
			// TODO implement this
			/*this.icservice.setElementPosition(this.selectedElement.name, this.selectedElement.xPosition, this.selectedElement.yPosition).subscribe(
				(res: any) => {
					//TODO put in some code
					//console.log(res);
				},
				(error) => { this.errorMessage = <any>error; }
			);*/
			this.isElementEngaged = false;
		}


	}
}