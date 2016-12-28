// Imports like relative paths
import { Component, Input } from '@angular/core';
import { SettingsButton } from '../model/setting-button';

//templateUrl and style properties like absolute paths from project root
@Component({
  selector: 'nav-icon-button',
  template: `
    <button class="{{button.styleclass}}">
      <img class="button_img_show" src="{{button.icon}}" />
      <img class="button_img_hover" src="{{button.iconhover}}" />
      <div class="button_text">{{button.caption}}</div>
    </button>
  `
})
export class SettingsButtonComponent {
  @Input() button?: SettingsButton;
  /*@Input() destination?: string;
  @Input() icon?: string;
  @Input() iconhover?: string;
  @Input() styleclass?: string;*/
}