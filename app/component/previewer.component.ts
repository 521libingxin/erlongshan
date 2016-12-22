// Imports like relative paths
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { NavService } from '../service/navigation.service';
import { IcService } from '../service/intercomm.service';
import { domIdObserver } from '../service/helper-functions';
import { EditedFileService } from '../service/edited-file.service';
import { TextElement } from '../model/text-element';
import { getLabelPreview } from '../model/plugin-request';



//templateUrl and style properties like absolute paths from project root
@Component({
	selector: 'editor',
	templateUrl: 'htmltemplate/previewertemplate.html',
	providers: [IcService],
})
// TODO check for uniqueness of names in CILF files
export class PreviewerComponent implements OnInit {
	mode = 'Observable';
	canvasElement: any;
	imageContent: string;
	height: number;
	width: number;
	heightInPx: number;
	gridScale: number;


	constructor(private icservice: IcService,
		private router: Router,
		private route: ActivatedRoute,
		private navservice: NavService,
		private editedFileService: EditedFileService) {
		this.heightInPx = 24;
	}

	ngOnInit() {
		// Get a handler for canvas div
		domIdObserver("canvas").then(
			(resolve: any) => {
				this.canvasElement = resolve;
				this.calculatePixelScale();
				// Fetch a manifest of CILF elements and contents
				this.icservice.remoteProcedureCallforPlugin(getLabelPreview, [this.editedFileService.currentEditedPath, this.editedFileService.currentEditedName]).subscribe(
					(res: any) => {
						if (res.Image != "") {
							this.imageContent = "data:image/png;base64," + res.Image;
							this.height = res.Height;
							this.width = res.Width;
						}
						//this.populateCanvas();
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

		this.route.url.subscribe(
			urlList => {
				this.navservice.setCurrentPath(urlList)
			}
		)
	}





	calculatePixelScale() {
		// Divide total height by amount of desired pixels to find a fractional grid scale
		let repPixelSize = this.canvasElement.offsetHeight / this.heightInPx;
		// TODO this line excludes pixels at the bottom, replace with a solution that uses all pixels
		// exists to make testing easier
		let intPixelSize = Math.floor(repPixelSize);
		this.gridScale = intPixelSize;
		// console.log(this.gridScale)
	}



	onResize($event) {
		// TODO improve this size check
		if ($event.srcElement.innerWidth > 800) {
			let gridScale_old = this.gridScale;
			// Divide total height by amount of desired pixels to find a fractional grid scale
			let repPixelSize = (window.innerWidth * 0.2) / this.heightInPx;
			// TODO this line excludes pixels at the bottom, replace with a solution that uses all pixels
			// exists to make testing easier
			let intPixelSize = Math.floor(repPixelSize);
			this.gridScale = intPixelSize;
			//TODO make better
			this.canvasElement.style.height = (this.gridScale * this.heightInPx).toString() + "px";
			this.canvasElement.style.width = (this.gridScale * this.heightInPx * 4).toString() + "px";

		}


	}

	switchToHome($event) {
		this.router.navigate(['/' + "home"]);

	}


}



