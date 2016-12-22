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
var navigation_service_1 = require('../service/navigation.service');
var intercomm_service_1 = require('../service/intercomm.service');
var helper_functions_1 = require('../service/helper-functions');
var edited_file_service_1 = require('../service/edited-file.service');
var plugin_request_1 = require('../model/plugin-request');
var PreviewerComponent = (function () {
    function PreviewerComponent(icservice, router, route, navservice, editedFileService) {
        this.icservice = icservice;
        this.router = router;
        this.route = route;
        this.navservice = navservice;
        this.editedFileService = editedFileService;
        this.mode = 'Observable';
        this.heightInPx = 24;
    }
    PreviewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        helper_functions_1.domIdObserver("canvas").then(function (resolve) {
            _this.canvasElement = resolve;
            _this.calculatePixelScale();
            _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.getLabelPreview, [_this.editedFileService.currentEditedPath, _this.editedFileService.currentEditedName]).subscribe(function (res) {
                if (res.Image != "") {
                    _this.imageContent = "data:image/png;base64," + res.Image;
                    _this.height = res.Height;
                    _this.width = res.Width;
                }
            }, function (error) {
                console.log(error);
            });
        }, function (reject) {
            console.log(reject);
        });
        this.route.url.subscribe(function (urlList) {
            _this.navservice.setCurrentPath(urlList);
        });
    };
    PreviewerComponent.prototype.calculatePixelScale = function () {
        var repPixelSize = this.canvasElement.offsetHeight / this.heightInPx;
        var intPixelSize = Math.floor(repPixelSize);
        this.gridScale = intPixelSize;
    };
    PreviewerComponent.prototype.onResize = function ($event) {
        if ($event.srcElement.innerWidth > 800) {
            var gridScale_old = this.gridScale;
            var repPixelSize = (window.innerWidth * 0.2) / this.heightInPx;
            var intPixelSize = Math.floor(repPixelSize);
            this.gridScale = intPixelSize;
            this.canvasElement.style.height = (this.gridScale * this.heightInPx).toString() + "px";
            this.canvasElement.style.width = (this.gridScale * this.heightInPx * 4).toString() + "px";
        }
    };
    PreviewerComponent.prototype.switchToHome = function ($event) {
        this.router.navigate(['/' + "home"]);
    };
    PreviewerComponent = __decorate([
        core_1.Component({
            selector: 'editor',
            templateUrl: 'htmltemplate/previewertemplate.html',
            providers: [intercomm_service_1.IcService],
        }), 
        __metadata('design:paramtypes', [intercomm_service_1.IcService, router_1.Router, router_1.ActivatedRoute, navigation_service_1.NavService, edited_file_service_1.EditedFileService])
    ], PreviewerComponent);
    return PreviewerComponent;
}());
exports.PreviewerComponent = PreviewerComponent;
//# sourceMappingURL=previewer.component.js.map