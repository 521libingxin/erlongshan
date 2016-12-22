"use strict";
(function (ElementTypes) {
    ElementTypes[ElementTypes["Plaintext"] = 0] = "Plaintext";
    ElementTypes[ElementTypes["Date"] = 1] = "Date";
    ElementTypes[ElementTypes["Container"] = 2] = "Container";
})(exports.ElementTypes || (exports.ElementTypes = {}));
var ElementTypes = exports.ElementTypes;
var Element = (function () {
    function Element(other) {
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
        this.zOrder = other["z-order"];
    }
    return Element;
}());
exports.Element = Element;
exports.DummyElement = {
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
};
//# sourceMappingURL=element.js.map