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
var Rx_1 = require('rxjs/Rx');
var intercomm_service_1 = require('../service/intercomm.service');
var navigation_service_1 = require('../service/navigation.service');
var edited_file_service_1 = require('../service/edited-file.service');
var HomeComponent = (function () {
    function HomeComponent(router, route, navservice, icservice, editedFileService) {
        this.router = router;
        this.route = route;
        this.navservice = navservice;
        this.icservice = icservice;
        this.editedFileService = editedFileService;
        this.editorButton = false;
        this.LargeButtons = [
            { caption: "Label finder", destination: "selectmessage", icon: "img/Icon_labelfinder_Available.png" },
            { caption: "Label creator", destination: "editor", icon: "img/Icon_Labelcreator_Available.png" }
        ];
        this.heightInPx = 24;
        this.bgImage = "";
        this.innerHomeWidth = 210;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = Rx_1.Observable.timer(1, 500);
        this.route.url.subscribe(function (urlList) {
            _this.navservice.setCurrentPath(urlList);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.go = function (i) {
        if (this.LargeButtons[i].destination == "editor") {
            this.router.navigate(['/' + this.LargeButtons[i].destination]);
        }
        else {
            this.router.navigate(['/' + this.LargeButtons[i].destination]);
        }
    };
    HomeComponent.prototype.switchToPreview = function ($event) {
        if ($event.target.className == "middle" && this.monitorLabelFilename != "") {
            this.router.navigate(['/' + "previewer"]);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'htmltemplate/hometemplate.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, navigation_service_1.NavService, intercomm_service_1.IcService, edited_file_service_1.EditedFileService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map