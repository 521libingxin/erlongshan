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
var app_component_1 = require('./component/app.component');
var content_overlay_component_1 = require('./component/content-overlay.component');
var home_component_1 = require('./component/home.component');
var head_component_1 = require('./component/head.component');
var editor_component_1 = require('./component/editor.component');
var select_message_component_1 = require('./component/select-message.component');
var previewer_component_1 = require('./component/previewer.component');
var app_routing_1 = require('./routing/app-routing');
var settings_menu_component_1 = require('./component/settings-menu.component');
var setting_button_component_1 = require('./component/setting-button.component');
var generic_setting_component_1 = require('./component/generic-setting.component');
var navigation_service_1 = require('./service/navigation.service');
var intercomm_service_1 = require('./service/intercomm.service');
var edited_file_service_1 = require('./service/edited-file.service');
var key_pipe_1 = require('./pipe/key.pipe');
var pixel_pipe_1 = require('./pipe/pixel.pipe');
var abc_1 = require('./component/abc');
var menus_component_1 = require('./component/menus.component');
var menus_service_1 = require('./service/menus.service');
var alert_component_1 = require('./component/alert.component');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var wizards_component_1 = require('./component/wizards.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.CrisisCenterRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                http_1.JsonpModule],
            declarations: [app_component_1.AppComponent,
                content_overlay_component_1.ContentOverlayComponent,
                editor_component_1.EditorComponent,
                home_component_1.HomeComponent,
                head_component_1.HeadComponent,
                alert_component_1.alertComponent,
                select_message_component_1.SelectMessageComponent,
                settings_menu_component_1.SettingsMenuComponent,
                setting_button_component_1.SettingsButtonComponent,
                previewer_component_1.PreviewerComponent,
                generic_setting_component_1.GenericSettingComponent,
                key_pipe_1.KeyPipe,
                abc_1.TjjComponent,
                wizards_component_1.WizardsComponent,
                menus_component_1.MenuComponent,
                pixel_pipe_1.PixelPipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [intercomm_service_1.IcService,
                navigation_service_1.NavService,
                menus_service_1.menuService,
                edited_file_service_1.EditedFileService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map