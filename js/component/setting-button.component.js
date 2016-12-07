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
var setting_button_1 = require('../model/setting-button');
var SettingsButtonComponent = (function () {
    function SettingsButtonComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', setting_button_1.SettingsButton)
    ], SettingsButtonComponent.prototype, "button", void 0);
    SettingsButtonComponent = __decorate([
        core_1.Component({
            selector: 'nav-icon-button',
            template: "\n    <button class=\"{{button.styleclass}}\">\n      <img class=\"button_img_show\" src=\"{{button.icon}}\" />\n      <img class=\"button_img_hover\" src=\"{{button.iconhover}}\" />\n      <div class=\"button_text\">{{button.caption}}</div>\n    </button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsButtonComponent);
    return SettingsButtonComponent;
}());
exports.SettingsButtonComponent = SettingsButtonComponent;
//# sourceMappingURL=setting-button.component.js.map