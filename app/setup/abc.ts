import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { NavService } from '../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'tjj-app',
  template: `
    <h1>{{title}}</h1>
  `
})
export class TjjComponent implements OnInit {
  constructor(
        private router: Router,
        private route: ActivatedRoute,
        private navservice: NavService) { }
  ngOnInit() {
        this.navservice.confirmMission(this.router.url.split("/"));
   /* this.route.url.subscribe(
    urlList => {
      console.log(urlList);
        this.navservice.setCurrentPath(urlList)
    });*/
  }
  title = '空页面。。。。';
}