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
var menus_service_1 = require('../service/menus.service');
var MenuComponent = (function () {
    function MenuComponent(router, route, navservice, menuservice) {
        this.router = router;
        this.route = route;
        this.navservice = navservice;
        this.menuservice = menuservice;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.destroy = this.navservice.currentPath.subscribe(function (list) {
            _this.tabSettings = _this.menuservice.getLeftlist(list);
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.destroy.unsubscribe();
    };
    MenuComponent.prototype.go = function (i) {
        if (i == "") {
            return false;
        }
        this.router.navigate([i]);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menus',
            template: "\n        <ul class=\"setting_left\">\n            <li *ngFor=\"let i of tabSettings\">\n                <nav-icon-button [button]='i' (click)=\"go(i.destination)\" ></nav-icon-button>\n            </li>\n        </ul>\n        <div class=\"setting_right\">\n            <router-outlet></router-outlet>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, navigation_service_1.NavService, menus_service_1.menuService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menus.component.js.map