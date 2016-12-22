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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var WizardsComponent = (function () {
    function WizardsComponent(router, route, navservice, modalService) {
        this.router = router;
        this.route = route;
        this.navservice = navservice;
        this.modalService = modalService;
    }
    WizardsComponent.prototype.ngOnInit = function () {
        this.destroy = this.navservice.currentPath.subscribe(function (list) {
        });
        this.navservice.setCurrentPath(["wizards"]);
    };
    WizardsComponent.prototype.ngOnDestroy = function () {
        this.destroy.unsubscribe();
    };
    WizardsComponent.prototype.go = function (i) {
        if (i == "") {
            return false;
        }
        this.router.navigate([i]);
    };
    WizardsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'login_style' }).result.then(function (result) {
            _this.go('wizardsMenu');
        });
    };
    WizardsComponent = __decorate([
        core_1.Component({
            selector: 'menus',
            template: "\n        <template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"login_alert\" >\n                <button class=\"btn_depth_style\" style=\"margin-bottom:7px;\">\n                    Disconnect from printer\n                </button>\n                <button class=\"btn_depth_style\" (click)=\"c('Close click')\">\n                    Lock screen\n                </button>\n            </div>\n        </template>\n        <div class=\"wizards_box\">\n            <div class=\"wizards_top\"></div>\n            <button class=\"btn_close\" (click)=\"open(content)\">\n                <div class=\"btn_close_in\"></div>\n            </button>\n            <div class=\"wizards_main\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, navigation_service_1.NavService, ng_bootstrap_1.NgbModal])
    ], WizardsComponent);
    return WizardsComponent;
}());
exports.WizardsComponent = WizardsComponent;
//# sourceMappingURL=wizards.component.js.map