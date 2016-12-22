"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../component/home.component');
var editor_component_1 = require('../component/editor.component');
var select_message_component_1 = require('../component/select-message.component');
var settings_menu_component_1 = require('../component/settings-menu.component');
var previewer_component_1 = require('../component/previewer.component');
var generic_setting_component_1 = require('../component/generic-setting.component');
var abc_1 = require('../component/abc');
var wizards_component_1 = require('../component/wizards.component');
var menus_component_1 = require('../component/menus.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'editor', component: editor_component_1.EditorComponent },
    { path: 'selectmessage', component: select_message_component_1.SelectMessageComponent },
    { path: 'settingsMenu', component: menus_component_1.MenuComponent, children: [
            { path: "", component: settings_menu_component_1.SettingsMenuComponent },
            { path: 'linemovement', component: abc_1.TjjComponent },
            { path: 'printtrigger', component: abc_1.TjjComponent },
            { path: 'poweroptions', component: abc_1.TjjComponent },
            { path: 'positionorientation', component: abc_1.TjjComponent },
            { path: 'content', component: abc_1.TjjComponent },
            { path: 'properties', component: abc_1.TjjComponent },
            { path: 'clocksdates', component: abc_1.TjjComponent },
            { path: 'printheadmanualmode', component: abc_1.TjjComponent },
            { path: 'inksystemmanualmode', component: abc_1.TjjComponent },
            { path: 'inkdetails', component: abc_1.TjjComponent },
            { path: 'hardware', component: abc_1.TjjComponent },
            { path: 'gutter', component: abc_1.TjjComponent },
            { path: 'installoptions', component: abc_1.TjjComponent },
            { path: 'status', component: abc_1.TjjComponent },
            { path: 'logs', component: abc_1.TjjComponent },
            { path: 'qualityproblems', component: abc_1.TjjComponent },
            { path: 'jetprofile', component: abc_1.TjjComponent },
            { path: 'tests', component: abc_1.TjjComponent },
            { path: 'modulation', component: abc_1.TjjComponent },
            { path: 'pressurelogs', component: abc_1.TjjComponent },
            { path: 'testprint', component: abc_1.TjjComponent },
            { path: 'installation', component: abc_1.TjjComponent },
            { path: 'inspection', component: abc_1.TjjComponent },
            { path: 'configueralerts', component: abc_1.TjjComponent },
            { path: 'rangedalerts', component: abc_1.TjjComponent },
            { path: 'emailalerts', component: abc_1.TjjComponent },
            { path: 'servicealerts', component: abc_1.TjjComponent },
            { path: 'setup', component: abc_1.TjjComponent },
            { path: 'assignment', component: abc_1.TjjComponent },
            { path: 'monitor', component: abc_1.TjjComponent },
            { path: 'test', component: abc_1.TjjComponent },
            { path: 'labelselect', component: abc_1.TjjComponent },
            { path: 'ethernet', component: abc_1.TjjComponent },
            { path: 'serial', component: abc_1.TjjComponent },
            { path: 'advanced', component: abc_1.TjjComponent },
            { path: 'languagekeyboard', component: abc_1.TjjComponent },
            { path: 'datetime', component: abc_1.TjjComponent },
            { path: 'backup', component: abc_1.TjjComponent },
            { path: 'restore', component: abc_1.TjjComponent },
            { path: 'defaults', component: abc_1.TjjComponent },
            { path: 'upgrade', component: abc_1.TjjComponent },
            { path: 'upgradeconfigur', component: abc_1.TjjComponent },
            { path: 'overview', component: abc_1.TjjComponent },
            { path: 'softwareversions', component: abc_1.TjjComponent },
            { path: 'printerconnection', component: abc_1.TjjComponent },
            { path: 'languageandkey', component: abc_1.TjjComponent },
            { path: 'accessibility', component: abc_1.TjjComponent },
            { path: 'diagnostics', component: abc_1.TjjComponent },
            { path: 'network', component: abc_1.TjjComponent },
            { path: 'versioninformation', component: abc_1.TjjComponent },
            { path: 'logoeditor', component: abc_1.TjjComponent },
            { path: 'installpacks', component: abc_1.TjjComponent },
            { path: 'migratepacks', component: abc_1.TjjComponent },
            { path: 'consumables', component: abc_1.TjjComponent },
            { path: 'counters', component: abc_1.TjjComponent },
            { path: 'statistics', component: abc_1.TjjComponent },
            { path: 'inspectionp', component: abc_1.TjjComponent },
        ] },
    { path: 'wizardsMenu', component: menus_component_1.MenuComponent, children: [
            { path: "", component: settings_menu_component_1.SettingsMenuComponent }
        ] },
    { path: 'wizardsMenus', component: wizards_component_1.WizardsComponent, children: [
            { path: "upgradewizard", component: abc_1.TjjComponent },
            { path: "globalprintsettings", component: abc_1.TjjComponent },
            { path: "globalprintsettings2", component: abc_1.TjjComponent }
        ] },
    { path: 'home/genericSetting', component: generic_setting_component_1.GenericSettingComponent },
    { path: 'previewer', component: previewer_component_1.PreviewerComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.CrisisCenterRoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.js.map