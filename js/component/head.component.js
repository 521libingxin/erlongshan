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
var HeadComponent = (function () {
    function HeadComponent() {
        this.style1 = 'inactive';
        this.style2 = 'inactive';
        this.topchange = 'toptype1';
        this.leftbtn = '';
        this.rightbtn = 'Live status';
        this.nowpage = 1;
        this.dianhover = 'dianhover1';
        this.rotate_180 = '';
        this.rotate_1801 = '';
        this.toplist = [
            "",
            "Connections and consumables",
            "Live status",
            "Overall equipment efficiency",
            ""
        ];
    }
    HeadComponent.prototype.changestyle = function () {
        if (this.style1 == 'inactive') {
            this.style1 = 'active';
            this.rotate_1801 = 'rotate_180';
        }
        else {
            this.style1 = 'inactive';
            this.rotate_1801 = '';
        }
    };
    HeadComponent.prototype.changestyle2 = function () {
        console.log(document.getElementById("head_box_more").offsetHeight);
        if (this.style2 == 'inactive') {
            this.style2 = 'active';
            this.rotate_180 = 'rotate_180';
        }
        else {
            this.style2 = 'inactive';
            this.rotate_180 = '';
        }
    };
    HeadComponent.prototype.changeheadleft = function () {
        if (this.nowpage > 1) {
            this.nowpage--;
            this.topchange = 'toptype' + this.nowpage;
            this.rightbtn = this.toplist[this.nowpage + 1];
            this.leftbtn = this.toplist[this.nowpage - 1];
            this.dianhover = 'dianhover' + this.nowpage;
        }
    };
    HeadComponent.prototype.changeheadright = function () {
        if (this.nowpage < 3) {
            this.nowpage++;
            this.topchange = 'toptype' + this.nowpage;
            this.rightbtn = this.toplist[this.nowpage + 1];
            this.leftbtn = this.toplist[this.nowpage - 1];
            this.dianhover = 'dianhover' + this.nowpage;
        }
    };
    HeadComponent = __decorate([
        core_1.Component({
            selector: 'head_box',
            template: "\n    <div class=\"head_box\" [@heroState]=\"style1\" >\n      <div class=\"head_top\">\n        <button *ngIf=\"leftbtn != ''\" class=\"head_top_btnleft\" (click)=\"changeheadleft()\">{{leftbtn}}</button>\n        <button *ngIf=\"rightbtn != ''\" class=\"head_top_btnright\" (click)=\"changeheadright()\">{{rightbtn}}</button>\n      </div>\n      <div class=\"head_bottom\"></div>\n      <ul class=\"head_ul_list\" [@topchange]=\"topchange\">\n        <li>page1<div class=\"head_list_bt\">page1\u4E0B\u90E8\u663E\u793A</div></li>\n        <li>page2<div class=\"head_list_bt\">page2\u4E0B\u90E8\u663E\u793A</div></li>\n        <li>page3<div class=\"head_list_bt\">page3\u4E0B\u90E8\u663E\u793A</div></li>\n      </ul>\n      <div class=\"head_bottom_box\">\n        <ul class=\"head_bottom_dian {{dianhover}}\">\n          <li class=\"diandian_li dian_li_1\"></li>\n          <li class=\"diandian_li dian_li_2\"></li>\n          <li class=\"diandian_li dian_li_3\"></li>\n        </ul>\n        <div class=\"up_or_down_icon head_up_or_downleft {{rotate_1801}}\">\n        </div>\n        <div class=\"up_or_down_icon head_up_or_downright {{rotate_1801}}\">\n        </div>\n        <div class=\"head_bottom_up\" (click)=\"changestyle()\"></div>\n      </div>\n    </div>\n    <div class=\"head_start\">\n      <div class=\"head_button_start\">\n        <div class=\"head_button_text\">START</div>\n      </div>\n      <div class=\"head_button_stop\">\n        <div class=\"head_button_text\">STOP</div>\n      </div>\n    </div>\n    <div id=\"head_box_more\" class=\"head_box_more\">\n      <div [@heroState2]=\"style2\" class=\"head_box_list\">\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n        <div>123123</div>\n      </div>\n      <div class=\"headmorebox\" (click)=\"changestyle2()\">\n        <div class=\"headmoreall\">\n          <div class=\"headmoretop\">STATUS</div>\n          <div class=\"headmoremid\">Electronic fan has stopped working</div>\n          <div class=\"headmorebottom {{rotate_180}}\"></div>\n        </div>\n      </div>\n    </div>\n  ",
            animations: [
                core_1.trigger('heroState', [
                    core_1.state('inactive', core_1.style({
                        top: '-100%',
                        bottom: '100%',
                    })),
                    core_1.state('active', core_1.style({
                        top: '0',
                        bottom: '64px'
                    })),
                    core_1.transition('inactive => active', core_1.animate('300ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('300ms ease-in'))
                ]),
                core_1.trigger('heroState2', [
                    core_1.state('inactive', core_1.style({
                        height: '0'
                    })),
                    core_1.state('active', core_1.style({
                        height: '*'
                    })),
                    core_1.transition('inactive => active', core_1.animate('500ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('500ms ease-in'))
                ]),
                core_1.trigger('topchange', [
                    core_1.state('toptype1', core_1.style({
                        left: '0'
                    })),
                    core_1.state('toptype2', core_1.style({
                        left: '-100%'
                    })),
                    core_1.state('toptype3', core_1.style({
                        left: '-200%'
                    })),
                    core_1.transition('toptype1 => toptype2', core_1.animate('500ms ease-in')),
                    core_1.transition('toptype2 => toptype3', core_1.animate('500ms ease-in')),
                    core_1.transition('toptype3 => toptype2', core_1.animate('500ms ease-in')),
                    core_1.transition('toptype2 => toptype1', core_1.animate('500ms ease-in'))
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HeadComponent);
    return HeadComponent;
}());
exports.HeadComponent = HeadComponent;
//# sourceMappingURL=head.component.js.map