"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var element_1 = require('./element');
var text_element_1 = require('./text-element');
var CompositeElement = (function (_super) {
    __extends(CompositeElement, _super);
    function CompositeElement(other) {
        _super.call(this, other);
        this.outline = "";
        this.visualChildren = Array();
        this.structuralChildren = Array();
        if (other.textElement != undefined) {
            if (Object.prototype.toString.call(other.textElement) == '[object Array]') {
                for (var i = 0; i < other.textElement.length; i++) {
                    this.visualChildren.push(new text_element_1.TextElement(other.textElement[i]));
                }
            }
            else {
                this.visualChildren.push(new text_element_1.TextElement(other.textElement));
            }
        }
        if (other.compositeElement != undefined) {
            if (Object.prototype.toString.call(other.compositeElement) == '[object Array]') {
                for (var i = 0; i < other.compositeElement.length; i++) {
                    this.structuralChildren.push(new CompositeElement(other.compositeElement[i]));
                }
            }
            else {
                this.structuralChildren.push(new CompositeElement(other.compositeElement));
            }
        }
        this.src = "";
    }
    return CompositeElement;
}(element_1.Element));
exports.CompositeElement = CompositeElement;
//# sourceMappingURL=composite-element.js.map