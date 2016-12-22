import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert-app',
  template: `
    <div>{{title}}</div>
    <button (click)="haha(title)">dsfsfd</button>
  `
})
export class alertComponent{
  @Input() title?: any;
  haha(val){
      console.log(val);
  }
}