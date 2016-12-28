// Imports like relative paths
import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id="main">
    <template ngbModalContainer></template>
    <head_box></head_box>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <foot_box></foot_box>
  </div>
  `
})
export class AppComponent {

}
