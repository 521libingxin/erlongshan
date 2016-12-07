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
var icc = require('../model/IntercommCommonActivateRequest.js');
var GenericSettingComponent = (function () {
    function GenericSettingComponent(icservice, route, navservice) {
        this.icservice = icservice;
        this.route = route;
        this.navservice = navservice;
        this.settings = [{ caption: "Production Line Setup", icon: 'img/printer_configuration_unselected.png', destination: '/settingsMenu/ProductionLineSetup' },
            { caption: "Global Print Settings", icon: 'img/machine_print_settings_unselected.png', destination: '/settingsMenu/GlobalPrintSettings' }
        ];
        this.tabSettings = [{ caption: "Settings", icon: 'img/Icon_Setup_Available.png', destination: '/' },
            { caption: "Wizards", icon: 'img/Icon_Wizards_Available.png', destination: '/' }];
    }
    GenericSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = Rx_1.Observable.timer(500, 1000);
        this.timerSubscription = this.timer.subscribe(function (t) {
            _this.icservice.remoteProcedureCall(icc.ReadBleedValve, []).subscribe(function (res) {
                _this.setting = res["bState"];
            }, function (error) {
                console.log(error);
            });
        });
        this.route.url.subscribe(function (urlList) {
            _this.navservice.setCurrentPath(urlList);
            console.log(urlList.pop().path);
        });
    };
    GenericSettingComponent.prototype.ngOnDestroy = function () {
        this.timerSubscription.unsubscribe();
    };
    GenericSettingComponent.prototype.onSettingToggle = function () {
        var output = !this.setting;
        this.icservice.remoteProcedureCall(icc.WriteBleedValve, [output]).subscribe(function (res) {
        }, function (error) {
            console.log(error);
        });
    };
    GenericSettingComponent = __decorate([
        core_1.Component({
            selector: 'editor-defaults',
            templateUrl: 'htmltemplate/genericsettingtemplate.html'
        }), 
        __metadata('design:paramtypes', [intercomm_service_1.IcService, router_1.ActivatedRoute, navigation_service_1.NavService])
    ], GenericSettingComponent);
    return GenericSettingComponent;
}());
exports.GenericSettingComponent = GenericSettingComponent;
//# sourceMappingURL=generic-setting.component.js.map