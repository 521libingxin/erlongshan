import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
export class SetupComponent implements OnInit , OnDestroy {
  tabSettings: SettingsButton[];
    constructor(
        private router: Router,
        private navservice: NavService,
        private menuservice: menuService
    ) { }
    destroy: any;
    ngOnInit() {
        this.navservice.confirmMission(this.router.url.split("/"));
       this.destroy = this.navservice.missionConfirmed$.subscribe(
        (list) => {
          this.tabSettings = this.menuservice.getLeftlist(list);
          console.log(this.tabSettings);
        });
    }
    ngOnDestroy(){
        this.destroy.unsubscribe();
    }
    go(i: any) {
      console.log(i);
        if(i === ""){return false;}
        this.router.navigate([i]);
    }

}
