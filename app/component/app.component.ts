// Imports like relative paths
import { Component, OnInit} from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import '../rxjs-operators';

import { NavService } from '../service/navigation.service';
// TODO shouldnt be here
import { menuService } from '../service/menus.service';
import { SettingsButton } from '../model/setting-button';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

//templateUrl and style properties like absolute paths from project root
@Component({
  selector: 'my-app',
  templateUrl: 'htmltemplate/apptemplate.html'
})
export class AppComponent implements OnInit {

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
    this.navservice.setCurrentPath( this.router.url.split("/"));
    this.navservice.currentPath.subscribe(
      (list: UrlSegment[]) => {
        this.homeurl = list[0] instanceof UrlSegment;
        if(!this.homeurl){
          this.listButtons = this.menuservice.getfootlist(list);
        }else{
          this.listButtons = this.menuservice.gethomelist();
        }
      });
  }

  go(i:any) {
    if(i == ""){return false;}
    this.router.navigate(['/' + i]);
  }

  open(content) {
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
