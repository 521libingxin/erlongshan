// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../service/navigation.service';

@Component({
  selector: 'app-contact',
  template: `
    <h2>Contact of {{userName}}</h2>
    <div>{{msg}}</div>
    <div>
      <a routerLink="/home" routerLinkActive="active">home</a>
      <a routerLink="/setting"  routerLinkActive="active">setup</a>
    </div>
  `
})
export class HomeComponent implements OnInit {

  msg = 'Loading contacts ...';
  userName = '';
  constructor(
    private router: Router,
    private navservice: NavService
  ) { }
  ngOnInit() {
      this.navservice.confirmMission(this.router.url.split("/"));
  }

}
