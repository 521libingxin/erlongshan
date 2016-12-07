// Imports like relative paths
import { Component, OnInit,trigger,state,style,transition,animate } from '@angular/core';
@Component({
  selector: 'head_box',
  template: `
    <div class="head_box" [@heroState]="style1" >
      <div class="head_top">
        <button *ngIf="leftbtn != ''" class="head_top_btnleft" (click)="changeheadleft()">{{leftbtn}}</button>
        <button *ngIf="rightbtn != ''" class="head_top_btnright" (click)="changeheadright()">{{rightbtn}}</button>
      </div>
      <div class="head_bottom"></div>
      <ul class="head_ul_list" [@topchange]="topchange">
        <li>page1<div class="head_list_bt">page1下部显示</div></li>
        <li>page2<div class="head_list_bt">page2下部显示</div></li>
        <li>page3<div class="head_list_bt">page3下部显示</div></li>
      </ul>
      <div class="head_bottom_box">
        <ul class="head_bottom_dian {{dianhover}}">
          <li class="diandian_li dian_li_1"></li>
          <li class="diandian_li dian_li_2"></li>
          <li class="diandian_li dian_li_3"></li>
        </ul>
        <div class="up_or_down_icon head_up_or_downleft {{rotate_1801}}">
        </div>
        <div class="up_or_down_icon head_up_or_downright {{rotate_1801}}">
        </div>
        <div class="head_bottom_up" (click)="changestyle()"></div>
      </div>
    </div>
    <div class="head_start">
      <div class="head_button_start">
        <div class="head_button_text">START</div>
      </div>
      <div class="head_button_stop">
        <div class="head_button_text">STOP</div>
      </div>
    </div>
    <div id="head_box_more" class="head_box_more">
      <div [@heroState2]="style2" class="head_box_list">
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
        <div>123123</div>
      </div>
      <div class="headmorebox" (click)="changestyle2()">
        <div class="headmoreall">
          <div class="headmoretop">STATUS</div>
          <div class="headmoremid">Electronic fan has stopped working</div>
          <div class="headmorebottom {{rotate_180}}"></div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('heroState', [
      state('inactive', style({
        top: '-100%',
        bottom:'100%',
      })),
      state('active',   style({
        top: '0',
        bottom:'64px'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-in'))
    ]),
    trigger('heroState2', [
      state('inactive', style({
        height:'0'
      })),
      state('active',   style({
        height:'*'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-in'))
    ]),
    trigger('topchange', [
      state('toptype1', style({
        left:'0'
      })),
      state('toptype2',   style({
        left:'-100%'
      })),
      state('toptype3',   style({
        left:'-200%'
      })),
      transition('toptype1 => toptype2', animate('500ms ease-in')),
      transition('toptype2 => toptype3', animate('500ms ease-in')),
      transition('toptype3 => toptype2', animate('500ms ease-in')),
      transition('toptype2 => toptype1', animate('500ms ease-in'))
    ]),
  ]
})
export class HeadComponent{
  style1 = 'inactive';
  style2 = 'inactive';
  topchange = 'toptype1';
  leftbtn = '';
  rightbtn = 'Live status';
  nowpage = 1;
  dianhover = 'dianhover1';
  rotate_180 = '';
  rotate_1801 = '';
  toplist = [
    "",
    "Connections and consumables",
    "Live status",
    "Overall equipment efficiency",
    ""
  ]
  changestyle(){
      if(this.style1 == 'inactive'){
        this.style1 = 'active';
        this.rotate_1801 = 'rotate_180';
      }else{
        this.style1 = 'inactive';
        this.rotate_1801 = '';
      }
  }
  changestyle2(){
    console.log(document.getElementById("head_box_more").offsetHeight);
      if(this.style2 == 'inactive'){
        this.style2 = 'active';
        this.rotate_180 = 'rotate_180';
      }else{
        this.style2 = 'inactive';
        this.rotate_180 = '';
      }
  }
  changeheadleft(){
    if(this.nowpage > 1){
      this.nowpage--;
      this.topchange = 'toptype'+this.nowpage;
      this.rightbtn = this.toplist[this.nowpage+1];
      this.leftbtn = this.toplist[this.nowpage-1];
      this.dianhover = 'dianhover'+this.nowpage;
    }
  }
  changeheadright(){
    if(this.nowpage < 3){
      this.nowpage++;
      this.topchange = 'toptype'+this.nowpage;
      this.rightbtn = this.toplist[this.nowpage+1];
      this.leftbtn = this.toplist[this.nowpage-1];
      this.dianhover = 'dianhover'+this.nowpage;
    }
  }
  constructor() { }
}
