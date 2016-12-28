// Imports like relative paths
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../service/navigation.service';
// TODO shouldnt be here
import { menuService } from '../service/menus.service';
import { SettingsButton } from '../model/setting-button';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'foot_box',
  template: `
    <div class="qs_footer">
      <div *ngIf="homeurl" class="qs_footer_box">
        <div class="qs_footer_left">
                  <nav-icon-button [button]='home' >123</nav-icon-button>
          <!--<nav-icon-button icon='../img/Icon_Home_Available.png' iconhover='../img/Icon_Home_Selected.png' styleclass='button_style_sma_dis' (click)="go('home')" ></nav-icon-button>-->
        </div>
        <ul class="qs_footer_mid">
          <li *ngFor="let i of listButtons" class="qs_footer_li">
                    <nav-icon-button [button]='i' (click)="go(i.destination)" ></nav-icon-button>
          </li>
        </ul>
        <div class="qs_footer_right">
          <template #content let-c="close" let-d="dismiss">
            <div class="login_alert" >
              <button class="btn_depth_style" style="margin-bottom:7px;">
                Disconnect from printer{{homeurl}}
              </button>
              <button class="btn_depth_style" (click)="c('Close click')">
                Lock screen
              </button>
            </div>
          </template>
                  <nav-icon-button [button]='login' (click)="open(content)" ></nav-icon-button>
                  <!--<nav-icon-button icon='../img/loginout_icon_unselected.png' styleclass='button_style_sma' (click)="go('home')" ></nav-icon-button>-->
        </div>
      </div>
      <div *ngIf="!homeurl" class="qs_footer_box">
        <ul class="qs_footer_left">
          <li *ngFor="let i of listButtons" class="qs_footer_li">
                    <nav-icon-button [button]='i' (click)="go(i.destination)" ></nav-icon-button>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class FootComponent implements OnInit {

  homeurl: boolean = true;
  haha = 123;
  listButtons:SettingsButton[];
  home = this.menuservice.getbuttonbyname('home','button_style_sma_dis');
  login = this.menuservice.getbuttonbyname('login','button_style_sma');
  constructor(
    private router: Router,
    private navservice: NavService,
    private menuservice:menuService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    console.log(this.router.url);
    this.navservice.missionConfirmed$.subscribe(
      (list) => {
        console.log(list);
        this.homeurl = list[1] === 'home';
        if(!this.homeurl){
          this.listButtons = this.menuservice.getfootlist(list);
        }else{
          this.listButtons = this.menuservice.gethomelist();
        }
      });
  }

  go(i:any) {
    if(i === ""){return false;}
    this.router.navigate(['/' + i]);
  }

  open(content:any) {
    this.modalService.open(content,{ windowClass: 'login_style'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
