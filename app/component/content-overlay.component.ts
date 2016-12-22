// Imports like relative paths
import { Component } from '@angular/core';

//templateUrl and style properties like absolute paths from project root
@Component({
    selector: 'content-overlay',
    templateUrl: 'htmltemplate/contentoverlaytemplate.html'
})
export class ContentOverlayComponent {
    statusIconsClicked(): any { return 0; }
    activateOverlay(): any { return 0; }
}
