import { NgModule }           from '@angular/core';

import { SetupComponent }     from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SettingsMenuComponent } from './settings-menu.component';
import { SharedModule }        from '../shared/shared.module';
import { WizardsComponent } from './wizardsMenu/wizards.component';
import { TjjComponent } from './abc';

@NgModule({
  imports:      [ SetupRoutingModule,SharedModule ],
  declarations: [ SetupComponent,SettingsMenuComponent,TjjComponent,WizardsComponent ]
})
export class Setup { }
