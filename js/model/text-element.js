"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var element_1 = require('./element');
var TextElement = (function (_super) {
    __extends(TextElement, _super);
    function TextElement(other) {
        _super.call(this, other);
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
    return TextElement;
}(element_1.Element));
exports.TextElement = TextElement;
//# sourceMappingURL=text-element.js.map