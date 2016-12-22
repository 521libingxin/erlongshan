export enum ElementTypes { Plaintext, Date, Container }
export class Element {
    background: number;
    height: number;
    invert: boolean;
    name: string;
    reverse: boolean;
    rotation: number;
    transparent: boolean;
    width: number;
    xPosition: number;
    yPosition: number;
    xPositionOld: number;
    yPositionOld: number;
    zOrder: number;



    // This is a copy constructor to TYPECAST data from JSON
    constructor(other: any) {
        this.background = Number(other.background);
        this.height = Number(other.height);
        this.invert = Boolean(other.invert);
        this.name = other.name;
        this.reverse = Boolean(other.reverse);
        this.rotation = Number(other.rotation);
        this.transparent = Boolean(other.transparent);
        this.width = Number(other.width);
        this.xPosition = Number(other.xPosition);
        this.xPositionOld = this.xPosition;
        this.yPosition = Number(other.yPosition);
        this.yPositionOld = this.yPosition;
        // TODO have this fixed over a very long time period
        this.zOrder = other["z-order"];
    }
}

export var DummyElement: Element = {
    "background": 0,
    "height": 0,
    "invert": false,
    "name": "",
    "reverse": false,
    "rotation": 0,
    "transparent": false,
    "width": 0,
    "xPosition": 0,
    "yPosition": 0,
    "xPositionOld": 0,
    "yPositionOld": 0,
    "zOrder": 0
}