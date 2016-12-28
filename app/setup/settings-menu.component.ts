import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsButton } from '../model/setting-button';
import { NavService } from '../service/navigation.service';
import { menuService } from '../service/menus.service';

@Component({
    selector: 'settings-menu',
    template: `
        <ul class="setting_right_ul">
           <li *ngFor="let i of settings" class="setting_right_li">
                <nav-icon-button [button]='i' (click)="go(i.destination)" ></nav-icon-button>
            </li>
        </ul>
    `
})
export class SettingsMenuComponent implements OnInit {
    settings: SettingsButton[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private navservice: NavService,
        private menuService: menuService
    ) { }

    ngOnInit() {
       this.settings = this.menuService.getrightlist(this.router.url.split("/").pop());
       this.navservice.confirmMission(this.router.url.split("/"));
    }
    go(i: any) {
        if(i === ""){return false;}
        this.router.navigate([i]);
    }

}