// Imports like relative paths
import { ModuleWithProviders,NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../component/app.component';
import { HomeComponent } from '../component/home.component';
import { EditorComponent } from '../component/editor.component';
import { SelectMessageComponent } from '../component/select-message.component'
import { SettingsMenuComponent } from '../component/settings-menu.component';
import { PreviewerComponent } from '../component/previewer.component';
import { GenericSettingComponent } from '../component/generic-setting.component';
import { TjjComponent } from '../component/abc';
import { WizardsComponent } from '../component/wizards.component';
import { MenuComponent } from '../component/menus.component';

// From official docu: The order of the routes in the configuration matters and this is by design.
// The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. 
const appRoutes: Routes = [
    // Init routing is handled by redirecting to another path when the URI fragment that is passed to a router is an empty string.
    // Default route is flagged by '**' which is the wildcard token.
    // TODO /home should point to the component that handles content.html
    { path: 'home', component: HomeComponent},
    { path: 'editor', component: EditorComponent },
    { path: 'selectmessage', component: SelectMessageComponent },
    { path: 'settingsMenu', component:MenuComponent ,children:[
        {path: "",component: SettingsMenuComponent},
        //productionlinesetup
        {path:'linemovement',component:TjjComponent},
        {path:'printtrigger',component:TjjComponent},
        {path:'poweroptions',component:TjjComponent},
        //globalprintsettings
        {path:'positionorientation',component:TjjComponent},
        {path:'content',component:TjjComponent},
        //editordefaults
        {path:'properties',component:TjjComponent},
        {path:'clocksdates',component:TjjComponent},
        //advancedsettings
        {path:'printheadmanualmode',component:TjjComponent},
        {path:'inksystemmanualmode',component:TjjComponent},
        {path:'inkdetails',component:TjjComponent},
        {path:'hardware',component:TjjComponent},
        {path:'gutter',component:TjjComponent},
        {path:'installoptions',component:TjjComponent},
        //printerdiagnostics
        {path:'status',component:TjjComponent},
        {path:'logs',component:TjjComponent},
        {path:'qualityproblems',component:TjjComponent},
        {path:'jetprofile',component:TjjComponent},
        {path:'tests',component:TjjComponent},
        //adjustment
        {path:'modulation',component:TjjComponent},
        {path:'pressurelogs',component:TjjComponent},
        {path:'testprint',component:TjjComponent},
        {path:'installation',component:TjjComponent},
        {path:'inspection',component:TjjComponent},
        //alertconfiguration
        {path:'configueralerts',component:TjjComponent},
        {path:'rangedalerts',component:TjjComponent},
        {path:'emailalerts',component:TjjComponent},
        {path:'servicealerts',component:TjjComponent},
        //ioport
        {path:'setup',component:TjjComponent},
        {path:'assignment',component:TjjComponent},
        {path:'monitor',component:TjjComponent},
        {path:'test',component:TjjComponent},
        {path:'labelselect',component:TjjComponent},
        //printernetwork
        {path:'ethernet',component:TjjComponent},
        {path:'serial',component:TjjComponent},
        {path:'advanced',component:TjjComponent},
        //regional
        {path:'languagekeyboard',component:TjjComponent},
        {path:'datetime',component:TjjComponent},
            //backuprestore
        {path:'backup',component:TjjComponent},
        {path:'restore',component:TjjComponent},
        {path:'defaults',component:TjjComponent},
        {path:'upgrade',component:TjjComponent},
        {path:'upgradeconfigur',component:TjjComponent},
        //systeminformation
        {path:'overview',component:TjjComponent},
        {path:'softwareversions',component:TjjComponent},
        //userinterface
        {path:'printerconnection',component:TjjComponent},
        {path:'languageandkey',component:TjjComponent},
        {path:'accessibility',component:TjjComponent},
        {path:'diagnostics',component:TjjComponent},
        {path:'network',component:TjjComponent},
        {path:'versioninformation',component:TjjComponent},
        //tools
        {path:'logoeditor',component:TjjComponent},
        //packsmanagement
        {path:'installpacks',component:TjjComponent},
        {path:'migratepacks',component:TjjComponent},
        //printerstatus
        {path:'consumables',component:TjjComponent},
        {path:'counters',component:TjjComponent},
        {path:'statistics',component:TjjComponent},
        {path:'inspectionp',component:TjjComponent},
    ]},
    { path: 'wizardsMenu', component:MenuComponent ,children:[
        {path: "",component: SettingsMenuComponent}
    ]},
    { path: 'wizardsMenus', component:WizardsComponent ,children:[
        {path: "upgradewizard",component: TjjComponent},
        {path: "globalprintsettings",component: TjjComponent},
        {path: "globalprintsettings2",component: TjjComponent}
    ]},
    { path: 'home/genericSetting', component: GenericSettingComponent },
    { path: 'previewer', component: PreviewerComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
//@NgModule({ imports: [ RouterModule.forRoot(appRoutes) ], exports: [ RouterModule ] }) export class CrisisCenterRoutingModule { } 
//TODO rename
export const CrisisCenterRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
