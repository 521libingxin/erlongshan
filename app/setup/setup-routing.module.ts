import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { SetupComponent }    from './setup.component';
import { SettingsMenuComponent } from './settings-menu.component';
import { WizardsComponent } from './wizardsMenu/wizards.component';
import { TjjComponent } from './abc';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'wizardsMenu', component:SetupComponent ,children:[
        {path: "",component: SettingsMenuComponent}
    ]},
    { path: 'wizardsMenus', component:WizardsComponent ,children:[
        {path: "upgradewizard",component: TjjComponent}
    ]},
    { path: 'settingsMenu', component: SetupComponent,children:[
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
        {path:'inspectionp',component:TjjComponent}
    ]}
  ])],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
