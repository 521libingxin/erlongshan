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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var appcomponent_1 = require('./component/appcomponent');
var largeiconbuttoncomponent_1 = require('./component/largeiconbuttoncomponent');
var lightlargeiconbuttoncomponent_1 = require('./component/lightlargeiconbuttoncomponent');
var midlargeiconbuttoncomponent_1 = require('./component/midlargeiconbuttoncomponent');
var contentoverlaycomponent_1 = require('./component/contentoverlaycomponent');
var homecomponent_1 = require('./component/homecomponent');
var editorcomponent_1 = require('./component/editorcomponent');
var selectmessagecomponent_1 = require('./component/selectmessagecomponent');
var previewercomponent_1 = require('./component/previewercomponent');
var approuting_1 = require('./routing/approuting');
var settingsmenucomponent_1 = require('./component/settingsmenucomponent');
var settingbuttoncomponent_1 = require('./component/settingbuttoncomponent');
var tabsettingbuttoncomponent_1 = require('./component/tabsettingbuttoncomponent');
var setupmenucomponent_1 = require('./component/setupmenucomponent');
var genericsettingcomponent_1 = require('./component/genericsettingcomponent');
var navigationservice_1 = require('./service/navigationservice');
var intercommservice_1 = require('./service/intercommservice');
var currenteditedservice_1 = require('./service/currenteditedservice');
var stylepipe_1 = require('./pipe/stylepipe');
var keyspipe_1 = require('./pipe/keyspipe');
var pxpipe_1 = require('./pipe/pxpipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                approuting_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule],
            declarations: [appcomponent_1.AppComponent,
                largeiconbuttoncomponent_1.LargeIconButtonComponent,
                lightlargeiconbuttoncomponent_1.LightLargeIconButtonComponent,
                midlargeiconbuttoncomponent_1.MidLargeIconButtonComponent,
                contentoverlaycomponent_1.ContentOverlayComponent,
                editorcomponent_1.EditorComponent,
                homecomponent_1.HomeComponent,
                selectmessagecomponent_1.SelectMessageComponent,
                settingsmenucomponent_1.SettingsMenuComponent,
                settingbuttoncomponent_1.SettingsButtonComponent,
                tabsettingbuttoncomponent_1.TabSettingButtonComponent,
                setupmenucomponent_1.SetupMenuComponent,
                previewercomponent_1.PreviewerComponent,
                genericsettingcomponent_1.GenericSettingComponent,
                stylepipe_1.StylePipe,
                keyspipe_1.KeysPipe,
                pxpipe_1.PixelPipe],
            bootstrap: [appcomponent_1.AppComponent],
            providers: [intercommservice_1.IcService,
                navigationservice_1.NavService,
                currenteditedservice_1.EditedFileService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=appmodule.js.map