// Imports like relative paths
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// TODO do we need JSONP ?
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './component/app.component';
import { ContentOverlayComponent } from './component/content-overlay.component';
import { HomeComponent } from './component/home.component';
import { HeadComponent } from './component/head.component';
import { EditorComponent } from './component/editor.component';
import { SelectMessageComponent } from './component/select-message.component';
import { PreviewerComponent } from './component/previewer.component';
import { CrisisCenterRoutingModule } from './routing/app-routing';
import { SettingsMenuComponent } from './component/settings-menu.component';
import { SettingsButtonComponent } from './component/setting-button.component';
import { GenericSettingComponent } from './component/generic-setting.component';
import { NavService } from './service/navigation.service';
import { IcService } from './service/intercomm.service';
import { EditedFileService } from './service/edited-file.service';
import { KeyPipe } from './pipe/key.pipe';
import { PixelPipe } from './pipe/pixel.pipe';
import { TjjComponent } from './component/abc';
import { MenuComponent } from './component/menus.component';
import { menuService } from './service/menus.service';
import { alertComponent } from './component/alert.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WizardsComponent } from './component/wizards.component';

// Add newly imported modules with selectors to declarations array
@NgModule({
  imports: [BrowserModule,
    CrisisCenterRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    JsonpModule],
  declarations: [AppComponent,
    ContentOverlayComponent,
    EditorComponent,
    HomeComponent,
    HeadComponent,
    alertComponent,
    SelectMessageComponent,
    SettingsMenuComponent,
    SettingsButtonComponent,
    PreviewerComponent,
    GenericSettingComponent,
    KeyPipe,
    TjjComponent,
    WizardsComponent,
    MenuComponent,
    PixelPipe],
  bootstrap: [AppComponent],
  providers: [IcService,
    NavService,
    menuService,
    EditedFileService]
})
export class AppModule { }