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
var menus_1 = require('../model/menus');
var core_1 = require('@angular/core');
var menuService = (function () {
    function menuService() {
    }
    menuService.prototype.objcopy = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    menuService.prototype.getLeftlist = function (url) {
        var t_len = url.length;
        var t_url = url[t_len - 1];
        var list = menus_1.menus[menus_1.menus_one[t_url].parent];
        var newlist = [];
        var basestyle = 'button_style_big';
        if (t_len > 2) {
            basestyle = 'button_style_big_noicon';
        }
        for (var i = 0; i < list.length; i++) {
            var tmenus = this.objcopy(menus_1.menus_one[list[i]]);
            if (list[i] == t_url) {
                tmenus['styleclass'] = basestyle + ' button_style_big_hover';
            }
            else {
                tmenus['styleclass'] = basestyle;
            }
            newlist[i] = tmenus;
        }
        return newlist;
    };
    menuService.prototype.getrightlist = function (url) {
        var list = menus_1.menus[url];
        var newlist = [];
        for (var i = 0; i < list.length; i++) {
            newlist[i] = this.getbuttonbyname(list[i], 'button_style_mid');
        }
        return newlist;
    };
    menuService.prototype.getfootlist = function (list) {
        var thome = menus_1.menus_one['home'];
        thome['styleclass'] = 'button_style_sma';
        var newlist = [thome];
        for (var i = 1, len = list.length; i < len; i++) {
            newlist.push(menus_1.menus_one['betw']);
            var tmenus = this.objcopy(menus_1.menus_one[menus_1.menus_one[list[i]].parent]);
            if (i == len - 1) {
                tmenus['styleclass'] = 'button_style_depth_dis';
                tmenus['destination'] = '';
            }
            else {
                tmenus['styleclass'] = 'button_style_sma';
            }
            newlist.push(tmenus);
        }
        return newlist;
    };
    menuService.prototype.getbuttonbyname = function (name, style) {
        var tmenus = this.objcopy(menus_1.menus_one[name]);
        tmenus['styleclass'] = style;
        return tmenus;
    };
    menuService.prototype.gethomelist = function () {
        var list = menus_1.menus['home'];
        var newlist = [];
        for (var i = 0; i < list.length; i++) {
            newlist[i] = this.getbuttonbyname(list[i], 'button_style_depth');
        }
        return newlist;
    };
    menuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], menuService);
    return menuService;
}());
exports.menuService = menuService;
//# sourceMappingURL=menus.service.js.map