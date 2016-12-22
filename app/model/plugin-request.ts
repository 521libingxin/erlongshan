// Not auto generated feel free to modify

export let setElementPosition = { type: "pluginCommand", destination: "example", id: 1, inParams: ["int32_t", "int32_t", "char"] };
export let loadFile = { type: "pluginCommand", destination: "example", id: 2, inParams: ["char", "char"] };
export let setStringContent = { type: "pluginCommand", destination: "example", id: 3, inParams: ["char", "char", "char"] };
// TODO returned image dat ais technically not a QString
export let getElementrenderByName = { type: "pluginCommand", destination: "example", id: 4, inParams: ["char"], outParams: ["QString", "int32_t", "int32_t", "Qstring"] };
export let insertNewElement = { type: "pluginCommand", destination: "example", id: 5, inParams: ["char", "char", "char", "char", "bool"] };
export let setElementFont = { type: "pluginCommand", destination: "example", id: 6, inParams: ["char", "char"] };
export let getLabelPreview = { type: "pluginCommand", destination: "example", id: 7, inParams: ["char"], outParams: ["QString", "int32_t", "int32_t", "Qstring"] };
export let setLabelMonitor = { type: "pluginCommand", destination: "example", id: 8, inParams: ["char", "char"] };
export let getLabelMonitor = { type: "pluginCommand", destination: "example", id: 9, outParams: ["int32_t", "int32_t", "Qstring", "QString"] };
// TODO demo fcn only
export let setDateStringContent = { type: "pluginCommand", destination: "example", id: 10, inParams: ["char", "char"] };
// TODO demo fcn only
export let getManifest = { type: "pluginCommand", destination: "example", id: 11, outParams: ["Jsonobject"] };
