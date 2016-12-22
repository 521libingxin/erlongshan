"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var Rx_1 = require('rxjs/Rx');
var intercomm_service_1 = require('../service/intercomm.service');
var navigation_service_1 = require('../service/navigation.service');
var helper_functions_1 = require('../service/helper-functions');
var edited_file_service_1 = require('../service/edited-file.service');
var element_1 = require('../model/element');
var composite_element_1 = require('../model/composite-element');
var font_1 = require('../model/font');
var plugin_request_1 = require('../model/plugin-request');
var X2JS = require('x2js');
var EditorComponent = (function () {
    function EditorComponent(icservice, route, navservice, location, editedFileService) {
        this.icservice = icservice;
        this.route = route;
        this.navservice = navservice;
        this.location = location;
        this.editedFileService = editedFileService;
        this.mode = 'Observable';
        this.imageContent = Array();
        this.isElementSelected = false;
        this.contents = {};
        this.inputText = "";
        this.timeElements = Array();
        this.isElementEngaged = false;
        this.fontList = font_1.fonts;
        this.heightInPx = 24;
        this.selectedFont = "";
        this.topLevelElement = new composite_element_1.CompositeElement(element_1.DummyElement);
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xJsCoverter = new X2JS();
        helper_functions_1.domIdObserver("canvas").then(function (resolve) {
            _this.canvasElement = resolve;
            _this.calculatePixelScale();
            _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.loadFile, [_this.editedFileService.currentEditedPath, _this.editedFileService.currentEditedName]).subscribe(function (res) {
                var jsonObj = _this.xJsCoverter.xml2js(res.Label);
                _this.topLevelElement = new composite_element_1.CompositeElement(jsonObj.label.layout.channel.segment.compositeElement);
                _this.parseContent(jsonObj.label);
                var timeContent = Array();
                for (var key in _this.contents) {
                    for (var key2 in _this.contents[key]) {
                        if (_this.contents[key][key2].transformFunction == "FormatTime") {
                            timeContent.push(_this.contents[key][key2]);
                        }
                    }
                }
                for (var key in _this.topLevelElement.structuralChildren) {
                    for (var key2 in timeContent) {
                        if (_this.topLevelElement.structuralChildren[key].visualChildren[0].contentId == timeContent[key2]["_id"]) {
                            _this.timeElements.push(_this.topLevelElement.structuralChildren[key]);
                        }
                    }
                }
                _this.populateCanvas();
            }, function (error) {
                console.log(error);
            });
        }, function (reject) {
            console.log(reject);
        });
        this.timer = Rx_1.Observable.timer(500, 1000);
        this.timerSubscription = this.timer.subscribe(function (t) {
            _this.refreshOnlyTimestamps();
        });
        this.route.url.subscribe(function (urlList) {
            _this.navservice.setCurrentPath(urlList);
        });
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        this.timerSubscription.unsubscribe();
    };
    EditorComponent.prototype.dragDropDisablerDummy = function () { return false; };
    EditorComponent.prototype.parseContent = function (label) {
        for (var key in label) {
            if (Object.prototype.toString.call(label[key]) != '[object Array]') {
                if (label[key]["_id"] != undefined) {
                    this.contents[key] = [label[key]];
                }
            }
            else {
                if (label[key][0]["_id"] != undefined) {
                    var arr = [];
                    for (var key2 in label[key]) {
                        if (label[key][key2]["_id"] != undefined) {
                            arr.push(label[key][key2]);
                        }
                    }
                    this.contents[key] = arr;
                }
            }
        }
    };
    EditorComponent.prototype.refreshOnlyTimestamps = function () {
        var _this = this;
        var date = new Date();
        var dateString = date.getFullYear().toString() + "-" + (("0" + ((date.getMonth() + 1).toString())).slice(-2)) + "-" + ("0" + (date.getDate().toString())).slice(-2) + "T" + (("0" + ((date.getHours()).toString())).slice(-2)) + ":" + (("0" + ((date.getMinutes()).toString())).slice(-2)) + ":" + (("0" + ((date.getSeconds()).toString())).slice(-2));
        var _loop_1 = function(key) {
            var localKey = key;
            this_1.icservice.remoteProcedureCallforPlugin(plugin_request_1.setDateStringContent, [this_1.timeElements[key].visualChildren[0].contentId, dateString]).subscribe(function (res) {
                var subKey = localKey;
                _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.getElementrenderByName, [_this.timeElements[subKey].name]).subscribe(function (res) {
                    _this.timeElements[subKey].src = "data:image/png;base64," + res.Image;
                    _this.timeElements[subKey].height = res.Height;
                    _this.timeElements[subKey].width = res.Width;
                }, function (error) {
                });
            }, function (error) {
            });
        };
        var this_1 = this;
        for (var key in this.timeElements) {
            _loop_1(key);
        }
    };
    EditorComponent.prototype.addText = function (id, isDate) {
        var _this = this;
        var newElement = new composite_element_1.CompositeElement(this.topLevelElement.structuralChildren[0]);
        newElement.visualChildren = this.topLevelElement.structuralChildren[0].visualChildren;
        var highestName = 0;
        var highestId = 0;
        for (var key in this.topLevelElement.structuralChildren) {
            var instance = this.topLevelElement.structuralChildren[key].name.match(/\d+$/);
            if (instance[0] && Number(instance[0]) > highestName) {
                highestName = Number(instance[0]);
            }
        }
        for (var key in this.contents) {
            for (var key2 in this.contents[key]) {
                var instanceID = this.contents[key][key2]["_id"].replace(/\b0+/, "");
                if (instanceID[0] && Number(instanceID[0]) > highestId) {
                    highestId = Number(instanceID[0]);
                }
            }
        }
        highestId++;
        highestName++;
        var highestIdSrc;
        if (isDate) {
            highestIdSrc = highestId + 1;
        }
        else {
            highestIdSrc = 0;
        }
        var newId = "00000000" + highestId.toString();
        newId = newId.slice(-8);
        var newId2 = "00000000" + highestIdSrc.toString();
        newId2 = newId2.slice(-8);
        var newName = "Text " + highestName.toString();
        newElement.name = newName;
        console.log(newElement);
        newElement.visualChildren[0].contentId = newId;
        var date = new Date();
        var dateString = date.getFullYear().toString() + "-" + (("0" + ((date.getMonth() + 1).toString())).slice(-2)) + "-" + (("0" + date.getDate().toString()).slice(-2)) + "T" + (("0" + ((date.getHours()).toString())).slice(-2)) + ":" + (("0" + ((date.getMinutes()).toString())).slice(-2)) + ":" + (("0" + ((date.getSeconds()).toString())).slice(-2));
        this.icservice.remoteProcedureCallforPlugin(plugin_request_1.insertNewElement, [newName, newId, newId2, (isDate ? this.dateParser(this.inputText) : this.inputText), isDate]).subscribe(function (res) {
            _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.getElementrenderByName, [newName]).subscribe(function (res) {
                newElement.src = "data:image/png;base64," + res.Image;
                newElement.xPosition = 0;
                newElement.xPositionOld = 0;
                newElement.yPosition = 0;
                newElement.yPositionOld = 0;
                newElement.height = +res.Height;
                newElement.width = +res.Width;
                _this.topLevelElement.structuralChildren.push(newElement);
                console.log(_this.contents);
                if (isDate) {
                    for (var key_1 in _this.contents.transformContent) {
                        for (var key2_1 in _this.contents.transformContent[key_1].parameter) {
                            if (_this.contents.transformContent[key_1].parameter[key2_1].parameterName == "FormatString") {
                                var copy = JSON.parse(JSON.stringify(_this.contents.transformContent[key_1]));
                                copy["_id"] = newId;
                                copy.input = newId2;
                                copy.parameter[key2_1].value.string = _this.dateParser(_this.inputText);
                                _this.contents.transformContent.push(copy);
                                break;
                            }
                        }
                    }
                    for (var key_2 in _this.contents.nonQueriedContent) {
                        if (_this.contents.nonQueriedContent[key_2].dataSource["_name"] == "current time") {
                            var copy = JSON.parse(JSON.stringify(_this.contents.nonQueriedContent[key_2]));
                            copy["_id"] = newId2;
                            copy.dataSource.dataFormat.dateTime = dateString;
                            _this.contents.nonQueriedContent.push(copy);
                            break;
                        }
                    }
                }
                else {
                    _this.contents.staticContent.push(_this.contents.staticContent[0]);
                    _this.contents.staticContent[_this.contents.staticContent.length - 1].value.string = _this.inputText;
                }
                console.log(_this.contents);
            }, function (error) {
            });
        }, function (error) {
        });
    };
    EditorComponent.prototype.onFontChange = function () {
        var _this = this;
        this.icservice.remoteProcedureCallforPlugin(plugin_request_1.setElementFont, [this.selectedElement.name, this.selectedFont]).subscribe(function (res) {
            _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.getElementrenderByName, [_this.selectedElement.name]).subscribe(function (res) {
                _this.selectedElement.src = "data:image/png;base64," + res.Image;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
        });
    };
    EditorComponent.prototype.populateCanvas = function () {
        var _this = this;
        var _loop_2 = function(key) {
            var index = key;
            this_2.icservice.remoteProcedureCallforPlugin(plugin_request_1.getElementrenderByName, [this_2.topLevelElement.structuralChildren[index].name]).subscribe(function (res) {
                _this.topLevelElement.structuralChildren[index].src = "data:image/png;base64," + res.Image;
            }, function (error) {
                console.log(error);
            });
        };
        var this_2 = this;
        for (var key in this.topLevelElement.structuralChildren) {
            _loop_2(key);
        }
    };
    EditorComponent.prototype.onResize = function ($event) {
        if ($event.srcElement.innerWidth > 800) {
            var gridScale_old = this.gridScale;
            var repPixelSize = (window.innerWidth * 0.2) / this.heightInPx;
            var intPixelSize = Math.floor(repPixelSize);
            this.gridScale = intPixelSize;
            this.canvasElement.style.height = (this.gridScale * this.heightInPx).toString() + "px";
            this.canvasElement.style.width = (this.gridScale * this.heightInPx * 4).toString() + "px";
        }
    };
    EditorComponent.prototype.setStringContent = function (id) {
        var _this = this;
        helper_functions_1.domIdObserver(id).then(function (resolve) {
            var id = _this.selectedElement.visualChildren[0].contentId;
            var isDate;
            for (var key in _this.contents) {
                for (var key2 in _this.contents[key]) {
                    if (_this.contents[key][key2]["_id"] == id) {
                        if (key == "staticContent") {
                            isDate = false;
                        }
                        else if (_this.contents[key][key2].transformFunction == "FormatTime") {
                            isDate = true;
                        }
                        else {
                            console.log("Op not supported for this element type.");
                        }
                        break;
                    }
                }
            }
            _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.setStringContent, [_this.selectedElement.visualChildren[0].contentId, (isDate ? _this.dateParser(resolve.value) : resolve.value), isDate.toString()]).subscribe(function (res) {
                _this.icservice.remoteProcedureCallforPlugin(plugin_request_1.getElementrenderByName, [_this.selectedElement.name]).subscribe(function (res) {
                    _this.selectedElement.src = "data:image/png;base64," + res.Image;
                    _this.selectedElement.width = res.Width;
                    _this.selectedElement.height = res.Height;
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }, function (reject) {
            console.log(reject);
        });
    };
    EditorComponent.prototype.dateParser = function (dateString) {
        var result = dateString.match(/{.*}/);
        var token = result[0].slice(1, -1);
        var tokens = token.split(":");
        var newString = "";
        while (tokens.length > 0) {
            var item = tokens.shift();
            if (item == "HH") {
                newString += "%CLK_HH%:";
            }
            else if (item == "mm") {
                newString += "%CLK_mm%:";
            }
            else if (item == "ss") {
                newString += "%CLK_ss%:";
            }
        }
        newString = newString.slice(0, -1);
        return newString;
    };
    EditorComponent.prototype.calculatePixelScale = function () {
        var repPixelSize;
        if (window.innerWidth > 800) {
            repPixelSize = this.canvasElement.offsetHeight / this.heightInPx;
        }
        else {
            repPixelSize = 80 / this.heightInPx;
        }
        var intPixelSize = Math.floor(repPixelSize);
        this.canvasElement.style.height = (intPixelSize * this.heightInPx).toString() + "px";
        this.canvasElement.style.width = (intPixelSize * this.heightInPx * 4).toString() + "px";
        this.gridScale = intPixelSize;
    };
    EditorComponent.prototype.onMouseDown = function ($event) {
        $event.preventDefault();
        if (this.selectedElement) {
            this.selectedElement.outline = "";
        }
        for (var key in this.topLevelElement.structuralChildren) {
            var i = this.topLevelElement.structuralChildren[key];
            if (i.name === $event.srcElement.id) {
                this.selectedElement = i;
                this.selectedElement.outline = "red 1px solid";
                this.isElementEngaged = true;
                this.initEventX = $event.pageX;
                this.initEventY = $event.pageY;
                i.xPositionOld = i.xPosition;
                i.yPositionOld = i.yPosition;
                var sourceDomNode = $event.srcElement;
                this.heightLimit = sourceDomNode.parentElement.offsetHeight - sourceDomNode.offsetHeight;
                this.heightLimit = this.heightLimit / this.gridScale;
                this.heightLimit = Math.floor(this.heightLimit);
                this.widthLimit = sourceDomNode.parentElement.offsetWidth - sourceDomNode.offsetWidth;
                this.widthLimit = this.widthLimit / this.gridScale;
                this.widthLimit = Math.floor(this.widthLimit);
                break;
            }
        }
    };
    EditorComponent.prototype.onMouseMove = function ($event) {
        if (this.isElementEngaged) {
            var distance = void 0;
            var newTop = void 0;
            var newLeft = void 0;
            distance = $event.pageY - this.initEventY;
            distance /= this.gridScale;
            distance = Math.floor(distance);
            newTop = this.selectedElement.yPositionOld + distance;
            distance = $event.pageX - this.initEventX;
            distance = distance / this.gridScale;
            distance = Math.floor(distance);
            newLeft = this.selectedElement.xPositionOld + distance;
            if (newTop < this.heightLimit && newTop > -1) {
                this.selectedElement.yPosition = Math.floor(newTop);
            }
            if (newLeft < this.widthLimit && newLeft > -1) {
                this.selectedElement.xPosition = Math.floor(newLeft);
            }
            if (newTop >= this.heightLimit + 1) {
                this.selectedElement.yPosition = this.heightLimit;
            }
            if (newLeft >= this.widthLimit + 1) {
                this.selectedElement.xPosition = this.widthLimit;
            }
            if (newTop <= -1) {
                this.selectedElement.yPosition = 0;
            }
            if (newLeft <= -1) {
                this.selectedElement.xPosition = 0;
            }
        }
    };
    EditorComponent.prototype.onMouseUp = function ($event) {
        if (this.isElementEngaged) {
            this.isElementEngaged = false;
        }
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'editor',
            templateUrl: 'htmltemplate/editortemplate.html',
            providers: [intercomm_service_1.IcService],
        }), 
        __metadata('design:paramtypes', [intercomm_service_1.IcService, router_1.ActivatedRoute, navigation_service_1.NavService, common_1.Location, edited_file_service_1.EditedFileService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map