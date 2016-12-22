import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,UrlSegment, ActivatedRoute } from '@angular/router';
import { SettingsButton } from '../model/setting-button';
import { NavService } from '../service/navigation.service';
import { menuService } from '../service/menus.service';

@Component({
    selector: 'menus',
    template: `
        <ul class="setting_left">
            <li *ngFor="let i of tabSettings">
                <nav-icon-button [button]='i' (click)="go(i.destination)" ></nav-icon-button>
            </li>
        </ul>
        <div class="setting_right">
            <router-outlet></router-outlet>
        </div>
    `
})            
export class MenuComponent implements OnInit, OnDestroy {
    tabSettings: SettingsButton[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private navservice: NavService,
        private menuservice: menuService
    ) { }
    destroy;
    ngOnInit() {
        this.destroy = this.navservice.currentPath.subscribe(
        (list) => {
            this.tabSettings = this.menuservice.getLeftlist(list);
        });
    }
    ngOnDestroy(){
        this.destroy.unsubscribe();
    }
    go(i: any) {
        if(i == ""){return false;}
        this.router.navigate([i]);
    }

}