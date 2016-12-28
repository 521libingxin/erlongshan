import { menus,menus_one } from '../model/menus';
import { SettingsButton } from '../model/setting-button';
import { Injectable } from '@angular/core';

@Injectable()
export class menuService {
  objcopy(obj: any ): Object {
    return JSON.parse( JSON.stringify( obj ));
  }
  getLeftlist(url: any ): SettingsButton[] {
    let t_len = url.length;
    let t_url = url[t_len-1];
    let list = menus[menus_one[t_url].parent];
    let newlist:SettingsButton[] = [];
    let basestyle = 'button_style_big';
    if(t_len > 2){
      basestyle = 'button_style_big_noicon';
    }
      for(let i = 0;i < list.length;i++){
        let tmenus = this.objcopy(menus_one[list[i]]);
        if(list[i] == t_url){
          tmenus['styleclass'] = basestyle+' button_style_big_hover';
        }else{
          tmenus['styleclass'] = basestyle;
        }
          newlist[i] = tmenus;
      }
      return newlist;
  }
  getrightlist(url: any ): SettingsButton[] {
    let list = menus[url];
    let newlist:SettingsButton[] = [];
    for(let i = 0;i < list.length;i++){
        newlist[i] = this.getbuttonbyname(list[i],'button_style_mid');
    }
    return newlist;
  }
  getfootlist(list: any ):SettingsButton[]{
    let thome = menus_one['home'];
    thome['styleclass'] = 'button_style_sma';
    let newlist:SettingsButton[] = [thome];
    for(let i = 1,len = list.length;i < len;i++){
      newlist.push(menus_one['betw']);
      let tmenus = this.objcopy(menus_one[menus_one[list[i]].parent]);
      if(i == len - 1){
        tmenus['styleclass'] = 'button_style_depth_dis';
        tmenus['destination'] = '';
      }else{
        tmenus['styleclass'] = 'button_style_sma';
      }
      newlist.push(tmenus);
    }
    return newlist;
  }
  getbuttonbyname(name: any , style: any ):SettingsButton{
    let tmenus = this.objcopy(menus_one[name]);
     tmenus['styleclass'] = style;
     return tmenus;
  }
  gethomelist():SettingsButton[]{
    let list = menus['home'];
    let newlist:SettingsButton[] = [];
    for(let i = 0;i < list.length;i++){
        newlist[i] = this.getbuttonbyname(list[i],'button_style_depth');
    }
    return newlist;
  }
}