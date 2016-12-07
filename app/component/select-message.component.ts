// Imports like relative paths
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IcService } from '../service/intercomm.service';
import { NavService } from '../service/navigation.service';
import { EditedFileService } from '../service/edited-file.service';


// This is a TS file that contains JS definitions.
var icc = require('../model/IntercommCommonActivateRequest');

//templateUrl and style properties like absolute paths from project root
@Component({
	selector: 'select-message',
	templateUrl: 'htmltemplate/selectmessagetemplate.html',
	providers: [IcService],
})
// TODO check for uniqueness of names in CILF files
export class SelectMessageComponent implements OnInit {

	//defaultLabelStore: string;
	fileNames: string[];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private navservice: NavService,
		private icService: IcService,
		private editedFileService: EditedFileService
	) {

		this.fileNames = Array<string>();
	}

	ngOnInit() {
		this.icService.remoteProcedureCall(icc.GetDefaultLabelStore, []).subscribe(
			(res: any) => {
				this.editedFileService.currentEditedPath = res.labelStore[0];
				//this.defaultLabelStore = res.labelStore[0];
				this.icService.remoteProcedureCall(icc.GetFileListing, [this.editedFileService.currentEditedPath, icc.ContentTypeFilter.eAllFiles]).subscribe(
					(res: any) => {
						this.fileNames = res["files"];
					},
					(error) => {
						console.log(error);
					}
				)
			},
			(error) => {
				console.log(error);
			}
		);

		this.route.url.subscribe(
			urlList => {
				this.navservice.setCurrentPath(urlList)
			}
		)
	}

	LargeButtons: any[] = [
		{ caption: "Preview", destination: "previewer", icon: "img/Icon_Preview_Available.png" },
		{ caption: "Edit", destination: "editor", icon: "img/Icon_Edit_Available.png" },
		{ caption: "Print", destination: "home", icon: "img/Icon_Send_to_printer_Available.png" }
	];

	go(fileName: string, i: number) {
		this.editedFileService.currentEditedName = fileName;
		if (this.LargeButtons[i].caption != "Print") {
			this.router.navigate(['/' + this.LargeButtons[i].destination]);
		}
		else {
			this.icService.remoteProcedureCall(icc.PutMessageOnline, [this.editedFileService.currentEditedPath, fileName]).subscribe(
				(res: any) => {

					this.router.navigate(['/' + this.LargeButtons[i].destination]);
					//console.log(res);
				},
				(error) => {
					console.log(error);
				}
			);
		}
	}
}

class cName {
	csVal: string = ".";
	cnVal: number = 0;
	cbval: boolean = true;
}