import { Element, ElementTypes } from './element';
import { TextElement } from './text-element';

export class CompositeElement extends Element {
   visualChildren: TextElement[];
   structuralChildren: CompositeElement[];
   type: ElementTypes;
   src: string;
   outline: string;

   // TODO it may be more sensible to leave the defualt constructors alone and use nested copyElement - CopyCompositeElement etc. functions to fill in info from sources
   constructor(other: any) {
      super(other);
      this.outline = "";
      this.visualChildren = Array<TextElement>();
      this.structuralChildren = Array<CompositeElement>();
      //console.log(other.textElement);
      // Checks if there are nested textelements
      if (other.textElement != undefined) {
         // If textelements are in an array iterate
         if (Object.prototype.toString.call(other.textElement) == '[object Array]') {
            for (let i = 0; i < other.textElement.length; i++) {
               this.visualChildren.push(new TextElement(other.textElement[i]));
            }
         }
         // If there is only one textelement push into array
         else {
            this.visualChildren.push(new TextElement(other.textElement));
         }
      }
      // Checks if there are nested compositeElements (these are recursive calls)
      if (other.compositeElement != undefined) {
         // If compositeElement are in an array iterate
         if (Object.prototype.toString.call(other.compositeElement) == '[object Array]') {
            for (let i = 0; i < other.compositeElement.length; i++) {
               this.structuralChildren.push(new CompositeElement(other.compositeElement[i]));
            }
         }
         // If there is only one compositeElement push into array
         else {
            this.structuralChildren.push(new CompositeElement(other.compositeElement))
         }
      }
      this.src = "";
   }
}