import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavService } from '../../service/navigation.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'menus',
    template: `
        <template #content let-c="close" let-d="dismiss">
            <div class="login_alert" >
                <button class="btn_depth_style" style="margin-bottom:7px;">
                    Disconnect from printer
                </button>
                <button class="btn_depth_style" (click)="c('Close click')">
                    Lock screen
                </button>
            </div>
        </template>
        <div class="wizards_box">
            <div class="wizards_top"></div>
            <button class="btn_close" (click)="open(content)">
                <div class="btn_close_in"></div>
            </button>
            <div class="wizards_main">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class WizardsComponent implements OnInit, OnDestroy {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private navservice: NavService,
        private modalService: NgbModal
    ) { }
    destroy:any;
    ngOnInit() {
         this.navservice.confirmMission(this.router.url.split("/"));
       this.destroy = this.navservice.missionConfirmed$.subscribe(
        (list) => {
          //
        });
    }
    ngOnDestroy(){
        this.destroy.unsubscribe();
    }
    go(i: any) {
        if(i === ""){return false;}
        this.router.navigate([i]);
    }

    open(content:any) {
        this.modalService.open(content,{ windowClass: 'login_style'}).result.then((result) => {
            this.go('wizardsMenu');
        });
    }

}