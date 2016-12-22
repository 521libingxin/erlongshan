"use strict";
exports.setElementPosition = { type: "pluginCommand", destination: "example", id: 1, inParams: ["int32_t", "int32_t", "char"] };
exports.loadFile = { type: "pluginCommand", destination: "example", id: 2, inParams: ["char", "char"] };
exports.setStringContent = { type: "pluginCommand", destination: "example", id: 3, inParams: ["char", "char", "char"] };
exports.getElementrenderByName = { type: "pluginCommand", destination: "example", id: 4, inParams: ["char"], outParams: ["QString", "int32_t", "int32_t", "Qstring"] };
exports.insertNewElement = { type: "pluginCommand", destination: "example", id: 5, inParams: ["char", "char", "char", "char", "bool"] };
exports.setElementFont = { type: "pluginCommand", destination: "example", id: 6, inParams: ["char", "char"] };
exports.getLabelPreview = { type: "pluginCommand", destination: "example", id: 7, inParams: ["char"], outParams: ["QString", "int32_t", "int32_t", "Qstring"] };
exports.setLabelMonitor = { type: "pluginCommand", destination: "example", id: 8, inParams: ["char", "char"] };
exports.getLabelMonitor = { type: "pluginCommand", destination: "example", id: 9, outParams: ["int32_t", "int32_t", "Qstring", "QString"] };
exports.setDateStringContent = { type: "pluginCommand", destination: "example", id: 10, inParams: ["char", "char"] };
exports.getManifest = { type: "pluginCommand", destination: "example", id: 11, outParams: ["Jsonobject"] };
//# sourceMappingURL=plugin-request.js.map