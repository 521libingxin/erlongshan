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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var IcService = (function () {
    function IcService(http) {
        this.http = http;
        this.baseUrl = '/';
    }
    IcService.prototype.remoteProcedureCall = function (fcn, InParam) {
        var body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + fcn.type + ' xmlns="urn:printerservice">' + fcn.id + ':' + this.parseInParameter(InParam) + '</' + fcn.type + '></soap:Body></soap:Envelope>';
        var headers = new http_1.Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, body, options)
            .map(this.extractSoapResponse)
            .catch(this.handleError);
    };
    IcService.prototype.remoteProcedureCallforPlugin = function (req, InParam) {
        req.Inparam = InParam;
        var body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + req.type + ' xmlns="urn:printerservice">' + JSON.stringify(req) + '</' + req.type + '></soap:Body></soap:Envelope>';
        var headers = new http_1.Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, body, options)
            .map(this.extractSoapResponse)
            .catch(this.handleError);
    };
    IcService.prototype.extractSoapResponse = function (resp) {
        var o = {};
        var ex = extraction_request();
        var clean = ex.replaceHTMLEntities(JSON.stringify(resp));
        var alpha = clean.substring(clean.indexOf('<json>') + 6);
        var jsonString = alpha.substring(0, alpha.indexOf('</json>'));
        jsonString = jsonString.replace("^tcp:(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.){3}([01]?\\d\\d?|2[0-4]\\d|25[0-5]):\\d+$|^tcp:localhost:\\d+$", "^tcp:(([01]?\\\\d\\\\d?|2[0-4]\\\\d|25[0-5])\\\\.){3}([01]?\\\\d\\\\d?|2[0-4]\\\\d|25[0-5]):\\\\d+$|^tcp:localhost:\\\\d+$");
        try {
            if (jsonString != "") {
                o = JSON.parse(jsonString);
                if (o.Reason && o.Reason === 'Session Removed!') {
                    console.log("session lost");
                }
            }
        }
        catch (err) {
            console.error("Error: " + err);
            console.log('jsonString: ', jsonString);
        }
        if (o["Data[0]"] == undefined) {
            return o;
        }
        var resObject = {};
        var i = 0;
        while (o["Data[" + i + "]"] != undefined) {
            for (var key in o["Data[" + i + "]"]) {
                var flag = true;
                for (var key2 in resObject) {
                    if (key == key2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    resObject[key] = Array();
                }
                if (o["Data[" + i + "]"][key]["type"] == "bool") {
                    resObject[key].push(Boolean(parseInt(o["Data[" + i + "]"][key]["value"])));
                }
                else if (o["Data[" + i + "]"][key]["type"] == "char") {
                    resObject[key].push(o["Data[" + i + "]"][key]["value"]);
                }
                else if (o["Data[" + i + "]"][key]["type"] == "uint8_t") {
                    resObject[key].push(parseInt(o["Data[" + i + "]"][key]["value"]));
                }
            }
            i++;
        }
        return resObject;
    };
    IcService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    IcService.prototype.parseInParameter = function (InParam) {
        var returnString = '';
        for (var i = 0; i < InParam.length; i++) {
            if (typeof InParam[i] == "boolean") {
                returnString += Number(InParam[i]);
            }
            else if (typeof InParam[i] == "number") {
                returnString += InParam[i].toString();
            }
            else if (typeof InParam[i] == "string") {
                returnString += InParam[i];
            }
            else {
                returnString += InParam[i];
            }
            returnString += ',';
        }
        return returnString.slice(0, -1);
    };
    IcService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IcService);
    return IcService;
}());
exports.IcService = IcService;
var extraction_request = function () {
    var sanitise = {
        translate: { "nbsp": " ", "amp": "&", "quot": "\"", "lt": "<", "gt": ">" },
        replaceHTMLEntities: function (s) {
            return (s.replace(/&(nbsp|amp|quot|lt|gt);/g, function (match, entity) {
                return sanitise.translate[entity];
            }));
        }
    };
    return sanitise;
};
//# sourceMappingURL=intercomm.service.js.map