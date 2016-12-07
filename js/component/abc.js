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
var TjjComponent = (function () {
    function TjjComponent(router, route, navservice) {
        this.router = router;
        this.route = route;
        this.navservice = navservice;
        this.title = '空页面。。。。';
    }
    TjjComponent.prototype.ngOnInit = function () {
        console.log(this.router.url);
        console.log(this.router.url.split("/"));
        this.navservice.setCurrentPath(this.router.url.split("/"));
    };
    TjjComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tjj-app',
            template: "\n    <h1>{{title}}</h1>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, navigation_service_1.NavService])
    ], TjjComponent);
    return TjjComponent;
}());
exports.TjjComponent = TjjComponent;
//# sourceMappingURL=abc.js.map