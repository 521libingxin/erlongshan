import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class IcService {
  constructor(private http: Http) { }

  private baseUrl = '/';  // URL to web API

  remoteProcedureCall(fcn: any, InParam: any[]): Observable<string> {
    let body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + fcn.type + ' xmlns="urn:printerservice">' + fcn.id + ':' + this.parseInParameter(InParam) + '</' + fcn.type + '></soap:Body></soap:Envelope>';
    let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(this.extractSoapResponse)
      .catch(this.handleError);
  }

  remoteProcedureCallforPlugin(req: any, InParam: any[]): Observable<string> {
    req.Inparam = InParam;
    let body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + req.type + ' xmlns="urn:printerservice">' + JSON.stringify(req) + '</' + req.type + '></soap:Body></soap:Envelope>';
    let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(this.extractSoapResponse)
      .catch(this.handleError);
  }

  // helper functions ==============================================================================================================

  private extractSoapResponse(resp: Response) {
    let o: any = {};
    var ex = extraction_request();

    var clean = ex.replaceHTMLEntities(JSON.stringify(resp));

    var alpha = clean.substring(clean.indexOf('<json>') + 6);
    var jsonString = alpha.substring(0, alpha.indexOf('</json>'));
    jsonString = jsonString.replace("^tcp:(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.){3}([01]?\\d\\d?|2[0-4]\\d|25[0-5]):\\d+$|^tcp:localhost:\\d+$", "^tcp:(([01]?\\\\d\\\\d?|2[0-4]\\\\d|25[0-5])\\\\.){3}([01]?\\\\d\\\\d?|2[0-4]\\\\d|25[0-5]):\\\\d+$|^tcp:localhost:\\\\d+$");
    try {
      if (jsonString != "") {
        o = JSON.parse(jsonString);
        if (o.Reason && o.Reason === 'Session Removed!') {
          // TODO implement some sort of redirect to lost session html
          console.log("session lost")
        }
      }
    }
    catch (err) {
      console.error("Error: " + err);
      console.log('jsonString: ', jsonString);
    }

    // if not IC resp just pass it on
    if (o["Data[0]"] == undefined) {
      return o;
    }
    //console.log(o);

    // if IC response, it has to be parsed out

    var resObject = {};
    var i = 0
    while (o["Data[" + i + "]"] != undefined) {
      for (let key in o["Data[" + i + "]"]) {

        // this whole structure determines if a new element deserves a new entry or gets appended to an existing array
        let flag = true;
        for (let key2 in resObject) {
          if (key == key2) {
            flag = false;
            break;
          }
        }
        // if flag is not false init a new array under the name.
        if (flag) {
          resObject[key] = Array<any>();
        }

        // Parse out params according to their stated types
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
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  // TODO this goes away after the ICI calls become JSONified
  private parseInParameter(InParam: any[]): string {
    var returnString = '';
    for (let i = 0; i < InParam.length; i++) {
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
        returnString += InParam[i]
      }

      returnString += ',';
    }
    return returnString.slice(0, -1);
  }
}

// TS ENDS HERE================================================================



// TODO the following function is not a part of the TS object but a global JS variable. Rewrite it and put into the TS block above
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
}