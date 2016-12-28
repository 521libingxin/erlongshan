// Imports like relative paths
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { CrisisCenterRoutingModule } from './app-routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule }    from './home/home.module';
import { Setup }    from './setup/setup.module';
import { HeadComponent }    from './head/head.component';
import { FootComponent }    from './foot/foot.component';

import { menuService } from './service/menus.service';
import { NavService } from './service/navigation.service';
import { SharedModule }        from './shared/shared.module';

// Add newly imported modules with selectors to declarations array
@NgModule({
  imports: [BrowserModule,
    NgbModule.forRoot(),
    CrisisCenterRoutingModule,
    HomeModule,
    Setup,
    SharedModule],
  declarations: [
    HeadComponent,
    FootComponent,
    AppComponent],
  bootstrap: [AppComponent],
  providers: [menuService,NavService]
})
export class AppModule { }