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
require('../rxjs-operators');
var navigation_service_1 = require('../service/navigation.service');
var menus_service_1 = require('../service/menus.service');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var AppComponent = (function () {
    function AppComponent(router, navservice, menuservice, modalService) {
        this.router = router;
        this.navservice = navservice;
        this.menuservice = menuservice;
        this.modalService = modalService;
        this.homeurl = true;
        this.haha = 123;
        this.home = this.menuservice.getbuttonbyname('home', 'button_style_sma_dis');
        this.login = this.menuservice.getbuttonbyname('login', 'button_style_sma');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navservice.setCurrentPath(this.router.url.split("/"));
        this.navservice.currentPath.subscribe(function (list) {
            _this.homeurl = list[0] instanceof router_1.UrlSegment;
            if (!_this.homeurl) {
                _this.listButtons = _this.menuservice.getfootlist(list);
            }
            else {
                _this.listButtons = _this.menuservice.gethomelist();
            }
        });
    };
    AppComponent.prototype.go = function (i) {
        if (i == "") {
            return false;
        }
        this.router.navigate(['/' + i]);
    };
    AppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'login_style' }).result.then(function (result) {
            console.log("Closed with: " + result);
        }, function (reason) {
            console.log("Dismissed " + _this.getDismissReason(reason));
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'htmltemplate/apptemplate.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, navigation_service_1.NavService, menus_service_1.menuService, ng_bootstrap_1.NgbModal])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map