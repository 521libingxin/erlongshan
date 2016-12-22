// Imports like relative paths
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { IcService } from '../service/intercomm.service';
import { NavService } from '../service/navigation.service';
import { domIdObserver } from '../service/helper-functions';
import { EditedFileService } from '../service/edited-file.service';

import { getLabelMonitor } from '../model/plugin-request';

//templateUrl and style properties like absolute paths from project root
@Component({
	selector: 'home',
	templateUrl: 'htmltemplate/hometemplate.html'
})
// TODO check for uniqueness of names in CILF files
export class HomeComponent implements OnInit, OnDestroy {
	innerHomeWidth: number;
	imageContent: string;
	height: string;
	width: string;
	heightInPx: number;
	gridScale: number;
	timer: Observable<number>;
	timerSubscription: Subscription;
	bgImage: string;
	monitorLabelFilename: string;
	editorButton: boolean = false;
	LargeButtons: any[] = [
		{ caption: "Label finder", destination: "selectmessage", icon: "img/Icon_labelfinder_Available.png" },
		{ caption: "Label creator", destination: "editor", icon: "img/Icon_Labelcreator_Available.png" }
	];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private navservice: NavService,
		private icservice: IcService,
		private editedFileService: EditedFileService
	) {
		this.heightInPx = 24;
		this.bgImage = "";
		this.innerHomeWidth = 210;
	}

	// This function is used by angular. All spaghetti code that WOULD go into the constructor SHOULD go here.
	ngOnInit() {
		this.timer = Observable.timer(1, 500);

		/*this.timerSubscription = this.timer.subscribe(t => {
			this.icservice.remoteProcedureCallforPlugin(getLabelMonitor, []).subscribe(
				(res: any) => {
					if (res.Image != "" && res.Image != undefined && res.Filename != "" && res.Filename != undefined) {
						this.bgImage = "url(data:image/png;base64," + res.Image + ")";
						this.monitorLabelFilename = res.Filename;
						if (!this.editorButton) {
							domIdObserver("innerHome").then(
								(resolve: any) => {
									this.innerHomeWidth += 110;
									this.editorButton = true;

								},
								(reject: string) => {
									console.log(reject);
								}
							);
						}
						if (this.editedFileService.currentEditedName == "") {
							this.editedFileService.currentEditedName = res.Filename;
						}
						if (this.editedFileService.currentEditedPath == "") {
							this.editedFileService.currentEditedPath = res.Filepath;
						}
					}

				},
				(error) => {
					console.log(error)
				}
			);
		});*/

		// Fetch the CILF on monitor
		// TODO mos def buggy, also make image greyed out when not printed






		this.route.url.subscribe(
			urlList => {
				this.navservice.setCurrentPath(urlList)
			}
		)


	}

	// This function is used by angular as a deconstructor. (JS DOES NOT have deconstructors.)
	ngOnDestroy() {
		//this.timerSubscription.unsubscribe();
	}

	go(i: number) {
		if (this.LargeButtons[i].destination == "editor") {
			this.router.navigate(['/' + this.LargeButtons[i].destination]);
		}
		else {
			this.router.navigate(['/' + this.LargeButtons[i].destination]);
		}
	}

	switchToPreview($event) {
		if ($event.target.className == "middle" && this.monitorLabelFilename != "") {
			this.router.navigate(['/' + "previewer"]);
		}
	}

}