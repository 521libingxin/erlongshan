import { Injectable } from '@angular/core';

@Injectable()
export class EditedFileService {
  constructor() { }

  // TODO put a empty string check method here

  currentEditedName: string = "";
  currentEditedPath: string = "";
  /*
    setCurrentEditedName(currentEditedName: string): void {
      this.currentEditedName = currentEditedName;
    }
  
    getCurrentEditedName(): string {
      return this.currentEditedName;
    }
  
    setCurrentEditedPath(currentEditedPath: string): void {
      this.currentEditedPath = currentEditedPath;
    }
  
    getCurrentEditedPath(): string {
      return this.currentEditedPath;
    }
    */
}