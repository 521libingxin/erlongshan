import { Element } from './element';

export class TextElement extends Element {
   bold: number;
   characterAspect: number;
   characterHeight: number;
   characterRotation: number;
   contentId: string;
   foregroundColour: number;
   intercharacterGap: number;
   italic: boolean;
   strikeout: boolean;
   typeface: string;
   underline: boolean;
   xJustification: string;
   yJustification: string;
   outline: string;


   // This is a copy constructor to TYPECAST data from JSON
   constructor(other: any) {
      super(other);
      this.bold = Number(other.bold);
      this.characterAspect = Number(other.characterAspect);
      this.characterHeight = Number(other.characterHeight);
      this.characterRotation = Number(other.characterRotation);
      this.contentId = other.contentId;
      this.foregroundColour = Number(other.foregroundColour);
      this.intercharacterGap = Number(other.intercharacterGap);
      this.italic = Boolean(other.italic);
      this.strikeout = Boolean(other.strikeout);
      this.typeface = other.typeface;
      this.underline = Boolean(other.underline);
      this.xJustification = other.xJustification;
      this.yJustification = other.yJustification;
      this.outline = "";
   }
}