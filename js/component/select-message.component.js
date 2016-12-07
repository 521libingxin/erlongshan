"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var intercomm_service_1 = require('../service/intercomm.service');
var navigation_service_1 = require('../service/navigation.service');
var edited_file_service_1 = require('../service/edited-file.service');
var icc = require('../model/IntercommCommonActivateRequest');
var SelectMessageComponent = (function () {
    function SelectMessageComponent(router, route, navservice, icService, editedFileService) {
        this.router = router;
        this.route = route;
        this.navservice = navservice;
        this.icService = icService;
        this.editedFileService = editedFileService;
        this.LargeButtons = [
            { caption: "Preview", destination: "previewer", icon: "img/Icon_Preview_Available.png" },
            { caption: "Edit", destination: "editor", icon: "img/Icon_Edit_Available.png" },
            { caption: "Print", destination: "home", icon: "img/Icon_Send_to_printer_Available.png" }
        ];
        this.fileNames = Array();
    }
    SelectMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.icService.remoteProcedureCall(icc.GetDefaultLabelStore, []).subscribe(function (res) {
            _this.editedFileService.currentEditedPath = res.labelStore[0];
            _this.icService.remoteProcedureCall(icc.GetFileListing, [_this.editedFileService.currentEditedPath, icc.ContentTypeFilter.eAllFiles]).subscribe(function (res) {
                _this.fileNames = res["files"];
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
        this.route.url.subscribe(function (urlList) {
            _this.navservice.setCurrentPath(urlList);
        });
    };
    SelectMessageComponent.prototype.go = function (fileName, i) {
        var _this = this;
        this.editedFileService.currentEditedName = fileName;
        if (this.LargeButtons[i].caption != "Print") {
            this.router.navigate(['/' + this.LargeButtons[i].destination]);
        }
        else {
            this.icService.remoteProcedureCall(icc.PutMessageOnline, [this.editedFileService.currentEditedPath, fileName]).subscribe(function (res) {
                _this.router.navigate(['/' + _this.LargeButtons[i].destination]);
            }, function (error) {
                console.log(error);
            });
        }
    };
    SelectMessageComponent = __decorate([
        core_1.Component({
            selector: 'select-message',
            templateUrl: 'htmltemplate/selectmessagetemplate.html',
            providers: [intercomm_service_1.IcService],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, navigation_service_1.NavService, intercomm_service_1.IcService, edited_file_service_1.EditedFileService])
    ], SelectMessageComponent);
    return SelectMessageComponent;
}());
exports.SelectMessageComponent = SelectMessageComponent;
var cName = (function () {
    function cName() {
        this.csVal = ".";
        this.cnVal = 0;
        this.cbval = true;
    }
    return cName;
}());
//# sourceMappingURL=select-message.component.js.map