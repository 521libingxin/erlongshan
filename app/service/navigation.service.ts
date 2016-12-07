import { Injectable, EventEmitter } from '@angular/core';
import { UrlSegment } from '@angular/router';



@Injectable()
export class NavService {
  constructor() { }

  // URL to current component
  //currentPath: EventEmitter<UrlSegment[]> = new EventEmitter<UrlSegment[]>();
  currentPath: EventEmitter<any[]> = new EventEmitter<any[]>();


  // get path from last activated route and pass to anzone listening
  setCurrentPath(currentPath: any[]): void {
    //console.log(currentPath);
    this.currentPath.emit(currentPath)
  }
}