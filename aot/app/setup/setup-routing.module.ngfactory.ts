/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../app/setup/setup-routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from './setup.component.ngfactory';
import * as import5 from './settings-menu.component.ngfactory';
import * as import6 from './wizardsMenu/wizards.component.ngfactory';
import * as import7 from './abc.ngfactory';
import * as import8 from '../../../app/setup/setup.component';
import * as import9 from '../../../app/setup/settings-menu.component';
import * as import10 from '../../../app/setup/wizardsMenu/wizards.component';
import * as import11 from '../../../app/setup/abc';
import * as import12 from '@angular/router/src/router_config_loader';
class SetupRoutingModuleInjector extends import0.NgModuleInjector<import1.SetupRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _SetupRoutingModule_1:import1.SetupRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import3.Injector) {
    super(parent,[
      import4.SetupComponentNgFactory,
      import5.SettingsMenuComponentNgFactory,
      import6.WizardsComponentNgFactory,
      import7.TjjComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_2():any[] {
      if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[
        {
          path: 'wizardsMenu',
          component: import8.SetupComponent,
            children: [{
              path: '',
              component: import9.SettingsMenuComponent
            }
          ]
        }
        ,
        {
          path: 'wizardsMenus',
          component: import10.WizardsComponent,
            children: [{
              path: 'upgradewizard',
              component: import11.TjjComponent
            }
          ]
        }
        ,
        {
          path: 'settingsMenu',
          component: import8.SetupComponent,
          children: [
            {
              path: '',
              component: import9.SettingsMenuComponent
            }
            ,
            {
              path: 'linemovement',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'printtrigger',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'poweroptions',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'positionorientation',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'content',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'properties',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'clocksdates',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'printheadmanualmode',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'inksystemmanualmode',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'inkdetails',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'hardware',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'gutter',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'installoptions',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'status',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'logs',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'qualityproblems',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'jetprofile',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'tests',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'modulation',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'pressurelogs',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'testprint',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'installation',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'inspection',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'configueralerts',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'rangedalerts',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'emailalerts',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'servicealerts',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'setup',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'assignment',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'monitor',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'test',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'labelselect',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'ethernet',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'serial',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'advanced',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'languagekeyboard',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'datetime',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'backup',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'restore',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'defaults',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'upgrade',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'upgradeconfigur',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'overview',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'softwareversions',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'printerconnection',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'languageandkey',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'accessibility',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'diagnostics',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'network',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'versioninformation',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'logoeditor',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'installpacks',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'migratepacks',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'consumables',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'counters',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'statistics',
              component: import11.TjjComponent
            }
            ,
            {
              path: 'inspectionp',
              component: import11.TjjComponent
            }

          ]

        }

      ]
    ]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.SetupRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._SetupRoutingModule_1 = new import1.SetupRoutingModule();
    return this._SetupRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.SetupRoutingModule)) { return this._SetupRoutingModule_1; }
    if ((token === import12.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SetupRoutingModuleNgFactory:import0.NgModuleFactory<import1.SetupRoutingModule> = new import0.NgModuleFactory(SetupRoutingModuleInjector,import1.SetupRoutingModule);