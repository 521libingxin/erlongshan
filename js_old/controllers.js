web.controller('SettingsMenuController', ['$scope', function($scope) {
	$scope.settings = [{id: "8", name: "Production Line Setup", icon: 'img/printer_configuration_unselected.png', destination: '/settingsMenu/ProductionLineSetup'},
						{id: "9", name: "Global Print Settings", icon: 'img/machine_print_settings_unselected.png', destination: '/settingsMenu/GlobalPrintSettings'},
						{id: "25", name: "Editor defaults", icon: 'img/advanced_unselected.png', destination: '/settingsMenu/PrinterSettings'},
						{id: "11", name: "Advanced", icon: 'img/advanced_unselected.png', destination: '/settingsMenu/PrinterSettings'},
						{id: "12", name: "Diagnostics", icon: 'img/diagnostics_unselected.png', destination: '/settingsMenu/Diagnostics'},
						{id: "26", name: "Adjustment", icon: 'img/diagnostics_unselected.png', destination: '/settingsMenu/Diagnostics'},
						{id: "27", name: "Alert configuration", icon: 'img/alert_unselected.png', destination: '/settingsMenu/AlertConfiguration'},
						{id: "15", name: "IO Port", icon: 'img/io_unselected.png', destination: '/settingsMenu/ExternalInterface'},
						{id: "16", name: "Printer Network", icon: 'img/network_unselected.png', destination:'/settingsMenu/NetworkEthernet'},
						{id: "17", name: "Security", icon: 'img/lock_unselected.png', destination: '/settingsMenu/UserManagement'},
						{id: "18", name: "Regional", icon: 'img/region_unselected.png', destination: '/settingsMenu/RegionalSettings'},
						{id: "19", name: "Backup & Restore", icon: "img/usb_operations_unselected.png", destination: '/settingsMenu/Backup'},
						{id: "20", name: "File Manager", icon: 'img/message_store_unselected.png', destination: '/settingsMenu/FileManagement'},
						{id: "21", name: "System Information", icon: 'img/information_unselected.png', destination: '/settingsMenu/SystemInformation'},
						{id: "27", name: "User interface", icon: 'img/information_unselected.png', destination: '/settingsMenu/SystemInformation'},
						{id: "28", name: "Tools", icon: 'img/information_unselected.png', destination: '/settingsMenu/SystemInformation'},
						{id: "29", name: "Printer status", icon: 'img/information_unselected.png', destination: '/settingsMenu/SystemInformation'},
						{id: "30", name: "Packs management", icon: 'img/information_unselected.png', destination: '/settingsMenu/SystemInformation'},
						{id: "24", name: "Initial Setup Wizard", icon:'img/wizard_unselected.png',	destination: '/settingsMenu/InitialSetupWizard'}]
	
	$scope.tabSettings = [{id: "1", name: "Settings", icon: 'img/Icon_Setup_Available.png', destination: '/'},
						{id: "2", name: "Wizards", icon: 'img/Icon_Wizards_Available.png', destination: '/'}]
						
	$scope.productionLineSettingsTab = [{id: "1", name: "Line movement", icon: '', destination: '/'},
										{id: "2", name: "Print trigger", icon: '', destination: '/'},
										{id: "3", name: "Power options", icon: '', destination: '/'}]
}]);


web.controller('HomeController', ['$scope', function($scope) {

}]);

/* section for all controller */
web.controller('WebController', ['$scope', '$http', '$location', '$rootScope', '$timeout', '$interval', '$cookies',

	function($scope, $http, $location, $rootScope, $timeout, $interval, $cookies) {
	
	$scope.LargeButtons = [	{caption: "Print Optimisation", destination:"printOptimisation", icon:"img/Icon_Printoptimisation_Pressed.png"}, 
							{caption: "Production Line Setup", destination:"ProductionLineSetup", icon:"img/Icon_ProductionLineSetup_Available.png"}, 
							{caption: "Setup", destination:"settingsMenu", icon:"img/machine_settings_unselected.png"}];
	
	var extraction_request = function() {
		var sanitise = {
			translate:{"nbsp": " ","amp" : "&","quot": "\"","lt"  : "<","gt"  : ">" },
			replaceHTMLEntities: function(s) {
				return (s.replace(/&(nbsp|amp|quot|lt|gt);/g, function(match, entity) {
					return sanitise.translate[entity];
				}));
			}
		};
		return sanitise;
	}
	
	/* for the communication we need parameter values as string and they must be concatenated to special syntax: "a,b,c,d" */
	var parseParameter = function(parameter) {
		var returnString = '';
		for(i=0; i < parameter.length;i++) {
			returnString += parameter[i] + ',';
		}
		return returnString.slice(0, -1);
	}
	
	/* will do a http post request with function name and parameters (when given) */
	$scope.CallInterCommFunction = function(functionName, parameter) {
		if(parameter === undefined)
			parameter = [];
		if(functionName.inParams !== undefined) {
			// console.log(parameter);
			inParamsExtendedLength = $scope.parameterCountCalculator(functionName.inParams);
			if(parameter.length == inParamsExtendedLength) {
				$http.post('/', {}, { headers: {'cookie' : $cookies.sessionId}, transformRequest: function(data, headersGetter) {
					var req = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + functionName.type + ' xmlns="urn:printerservice">' + functionName.id + ':' + parseParameter(parameter) + '</' + functionName.type + '></soap:Body></soap:Envelope>'
					return req; 
				}})
				.success(function(data, status, headers, config) {
					// console.log(data.sessionId);
					// console.log(headers);
					$scope.received_objects = _extractSoapResponse_(data);
					console.log($scope.received_objects);
					$scope.return_object = JSON.stringify(_extractData($scope.received_objects, functionName), null, 2);
				})
			}
			else {
				$scope.return_object = "Parameter missing: " + functionName.inParams;
			}
		}
		else
		{
			$http.post('/', {}, { headers: {'cookie' : $cookies.sessionId}, transformRequest: function(data, headersGetter) {
					var req = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + functionName.type + ' xmlns="urn:printerservice">' + functionName.id + ':'  + '</' + functionName.type + '></soap:Body></soap:Envelope>'
					return req; 
				}})
				.success(function(data, status, headers, config) {
					$scope.received_objects = _extractSoapResponse_(data);
					$scope.result = _extractData($scope.received_objects, functionName);
					// console.log($scope.result);
					$scope.return_object = JSON.stringify(_extractData($scope.received_objects, functionName), null, 2);
				})
		}
	}
	
	$scope.getCssValuePrefix = function() {
		var rtrnVal = '';//default to standard syntax
		var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-', ''];
		// Create a temporary DOM object for testing
		var dom = document.createElement('div');
		for (var i = 0; i < prefixes.length; i++)
		{
			// Attempt to set the style
			dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
			// Detect if the style was successfully set
			if (dom.style.background)
				rtrnVal = prefixes[i];
		}
		dom = null;
		delete dom;
		return rtrnVal;
	};
	
	$scope.statusUpdating = $interval( function() {
		// if(eval('GetCurrentStatus'))
			// $scope.CallInterCommFunction(GetCurrentStatus);
		// else
			// $scope.CallInterCommFunction(eval('GetCurrentStatus'));
		$scope.latest_status = $scope.result;
		switch(parseInt($scope.latest_status[0].nSeverity.value))
		{
			case StatusSeverity.informal:
				var colorOne = "#01d276";
				var colorTwo = "#118a3b";
				break;
			case StatusSeverity.warning:
				var colorOne = "#009beb";
				var colorTwo = "#005ba2";
				break;
			case StatusSeverity.critical_fault:
				var colorOne = "#e63851";
				var colorTwo = "#780912";
				break;
			case StatusSeverity.disabled:
				var colorOne = "#e63851";
				var colorTwo = "#780912";
				break;
			default:
				var colorOne = "#e63851";
				var colorTwo = "#780912";
		}
		var dom = document.getElementById('WebStatusMenu');
		dom.style.backgroundImage = $scope.getCssValuePrefix() + 'linear-gradient(' + colorOne + ', ' + colorTwo + ')';
	}, 1000);

	/* http post request for the event requests */
	var RequestEvent = function() {
		$http.post('/', {}, { headers: {'cookie' : $cookies.sessionId}, transformRequest: function(data, headersGetter) {
			var req = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><requestEvent xmlns="urn:printerservice"></requestEvent></soap:Body></soap:Envelope>'
			return req; 
		},
		transformResponse: function (resp, headers) {
			// console.log("headers");
			return resp;
		}})
		.success(function(data, status, headers, config) {
			// $scope.received_objects = _extractSoapResponse_(data);
			// $scope.return_object = _extractData($scope.received_objects, functionName);
			// $scope.return_object = JSON.stringify(_extractData($scope.received_objects, functionName), null, 2);
		})
	}
	
	$scope.go = function(path) {
		$location.path(path);
	}

	$scope.activateOverlay = function() {
		var elementOverlay = document.getElementById('header_overlay');
		console.log(elementOverlay);
		if(elementOverlay.style.bottom == "" || elementOverlay.style.bottom == "100%")
		{
			elementOverlay.style.bottom = "0%";
			elementOverlay.style.transform = "rotate(180deg)";
		}
		else
		{
			elementOverlay.style.bottom = "100%";
			elementOverlay.style.transform = "rotate(0deg)";
		}
	}
		
	$scope.startPrinter = function() {
		if(eval('SelectReadyState'))
			$scope.CallInterCommFunction(SelectReadyState);
		else
			$scope.CallInterCommFunction(eval('SelectReadyState'));
	}
	
	$scope.printerName = function() {
		if(eval('ReadPrinterModel'))
			$scope.CallInterCommFunction(ReadPrinterModel);
		else
			$scope.CallInterCommFunction(eval('ReadPrinterModel'));

	}
	$scope.printerName();
	$scope.stopPrinter = function() {
		if(eval('SelectOffState'))
			$scope.CallInterCommFunction(SelectOffState);
		else
			$scope.CallInterCommFunction(eval('SelectOffState'));

	}
	
	var ImageTest = function(cb) {
		$http.post('/', {}, { headers: {'cookie' : $cookies.sessionId}, transformRequest: function(data, headersGetter) {
			var req = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><pluginCommand xmlns="urn:printerservice">example:0:</pluginCommand></soap:Body></soap:Envelope>'
			return req; 
		},
		transformResponse: function (resp, headers) {
			// console.log("headers");
			return resp;
		}})
		.success(function(data, status, headers, config) {
			/* QT source code:
				QFile file("E:\\test.bmp");
				file.open(QIODevice::ReadOnly);
				QByteArray array = file.readAll();
				return "<json>{ \"State\" : \"Success\", \"Image\" :\"" + array.toBase64() + "\"}</json>";
				
				
			NOTE: all possible images can be set, the only restriction is that QT can load it
			*/
			$scope.received_objects = _extractSoapResponse_(data);
			var tempImage = document.getElementById("image");
			// console.log(document);
			if($scope.received_objects.State == "Success")
				tempImage.src = "data:image/png;base64," + $scope.received_objects.Image;
		})
		.error(function(ata, status, headers, config) {
			console.log("ERROR");
		})
	}
	/* test print of the instantiation from the structure tLaserParameterSetV3 */
	// console.log(Object.keys(new tLaserParameterSetV3));
	/* idea to request events which will be subscribed here */
	// RequestEvent();

	
	$scope.imageUpdating = $interval( function() {
		//ImageTest();
		//List all files works $scope.CallInterCommFunction(GetFileAndDirectoryListing,['C://asd',ContentTypeFilter.eEverything]);
		// create folder works $scope.CallInterCommFunction(CreateFolder,['C://','asd']);
		//GetFileListing works $scope.CallInterCommFunction(GetFileListing,['C://asd',ContentTypeFilter.eEverything]);
		// load file $scope.CallInterCommFunction(LoadFile,['C://asd\kreis.lbl']);
		$scope.CallInterCommFunction(GeneratePreviewBitmap,['C://lol','no_file']);
	}, 2000);

	/* base function construct for the longpolling mechanism, must be reimplemented in webserver backend */
	$scope.count = 0;
	var LongPolling = function(cb) {
		var functionName = eval("GetCurrentStatus");
		$http.post('/', {}, { headers: {'cookie' : $cookies.sessionId}, transformRequest: function(data, headersGetter) {
			var req = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + functionName.type + ' xmlns="urn:printerservice">' + functionName.id + ':</' + functionName.type + '></soap:Body></soap:Envelope>'
			return req; 
		},
		transformResponse: function (resp, headers) {
			// console.log("headers");
			return resp;
		}})
		.success(function(data, status, headers, config) {
			$scope.longpolling_result = _extractSoapResponse_(data);
			$scope.longpolling_result = JSON.stringify($scope.longpolling_result, null, 2);
			$scope.count += 1;
			// comment the following 3 lines for delaying the recalling of "LongPolling"
			$timeout(function() {
				LongPolling();
			}, 2000);
		})
		.error(function(ata, status, headers, config) {
			console.log("ERROR");
		})
	}
	
	/* activate the polling mechanism for a periodic repeat (every 1sec) */
	// LongPolling();
/* 	var LongPollUpdating = $interval( function() {
		LongPolling();
	}, 1000);
 */	
	/* for activated polling we need a event which cancels the polling if the interval mechanism is disabled */
	// $scope.$on("$destroy", function(e) {
        // $interval.cancel(LongPollUpdating);
    // });
	
	/* we need the parameter count for calling individual functions */
	$scope.parameterCountCalculator = function(inParams) {
		var inParamsExtendedLength = 0;
		for(i=0; i < inParams.length; i++) {
			try {
				var temp_param_length = eval('new ' + inParams[i]);
				inParamsExtendedLength += temp_param_length.paramCount;
			} catch(err) {
				inParamsExtendedLength += 1;
			}
		}
		return inParamsExtendedLength
	}
	
	/* through the include of auto generated *.js file we will verify the function typed in */
	$scope.verify = function() {
		var name = $scope.function_model;
		try {
			x = eval(name);
			$scope.function_object = JSON.stringify(x, null, 2);
		} catch(err) {
			$scope.function_object = 'function name not declared: ' + name;
			console.log(err);
		}
	}
	
	/* through the include of auto generated *.js file we will verify for existing structure definition */
	$scope.verifyStructure = function() {
		var name = $scope.structure;
		try {
			x = eval('new ' + name);
			$scope.structure_object = JSON.stringify(x, null, 2);
		} catch(err) {
			$scope.structure_object = 'structure name not declared: ' + name;
			// console.log(err);
		}
	}
	
	$scope.setTextContent = function(parameterFieldName) {
		var param = document.getElementById(parameterFieldName).value;
		// if(eval('WriteLiveObjectText'))
			// $scope.CallInterCommFunction(WriteLiveObjectText, ['Text 1', param]);
		// else
			// $scope.CallInterCommFunction(eval('WriteLiveObjectText'), ['Text 1', param]);
	}
	
	/* through the include of auto generated *.js file we will verify for existing enum definition */
	$scope.verifyEnum = function() {
		var name = $scope.enumeration;
		try {
			x = eval(name);
			$scope.enum_object = JSON.stringify(x, null, 2);
		} catch(err) {
			$scope.enum_object = 'enum name not declared: ' + name;
			// console.log(err);
		}
	}
	
	/* this function will differ functions with parameters (that will be needed for the intercomm call) and also calls without any parameter */
	$scope.call = function(functionFieldName, resultFieldName, parameterFieldName) {
		var x = document.getElementById(functionFieldName).value;
		try {
			var in_parameter = eval(x).inParams;
			inParamsExtendedLength = $scope.parameterCountCalculator(in_parameter);
			var param = document.getElementById(parameterFieldName).value;
			var param_list = param.split(',')
			if(in_parameter === undefined)
				$scope.CallInterCommFunction(eval(x));
			else if(inParamsExtendedLength === param_list.length && param_list[0] !== "")
				var has_parameter = in_parameter === undefined ? $scope.CallInterCommFunction(eval(x)) : $scope.CallInterCommFunction(eval(x),  param.split(','));
			else {
				if(param_list[0] === "")
					$scope.return_object = "parameter is empty, please type parameters: " + in_parameter;
				else
					$scope.return_object = "Missing parameter or unequal parameter count, should: " + inParamsExtendedLength + " is:" + param_list.length;
			}
		} catch(err) {
			if(eval(x) !== undefined) {
				$scope.CallInterCommFunction(eval(x));
			} else {
				$scope.return_object = "Function name is not defined! See auto generated file (from *.src)";
			}
		}
	}
	
	/* through the include of auto generated *.js file we will verify for existing structure definition */
	var _extractData = function(data, functionName) {
		if(functionName.outParams !== undefined){
			var structure_variable_count = 0;
			var i = 0;
			var fill_structure_array = false;
			output_array = [];
			temp_array = [];
			for (var k in data) {
				var keys;
				if (data.hasOwnProperty(k) && k !== "InterCommState") {
					if(angular.isDefined(functionName.outParams[i])) {
						fill_structure_array = true;
						try {
							var keys = Object.keys(eval('new ' + functionName.outParams[i]));
							if(keys.length>1) {
								if(structure_variable_count != keys.length-1)
									fill_structure_array = false;
							}
						}
						catch(err) {
							// console.log("catch");
							// console.log(err);
						}
						var original_name = Object.keys($scope.received_objects[k]);
						if(fill_structure_array) {
							var temp_object = {};
							if(temp_array.length === 0) {
								temp_object[original_name] = $scope.received_objects[k][original_name];
							}
							else {
								temp_object[functionName.outParams[i]] = temp_array;
								temp_array = [];
								structure_variable_count = 0;
								fill_structure_array = false;
							}
							output_array.push(temp_object);
						}
						if(!fill_structure_array) {
							var temp_object = {};
							if(angular.isDefined(keys))
								temp_object[keys[structure_variable_count]] = $scope.received_objects[k][original_name];
							else
								temp_object[original_name] = $scope.received_objects[k][original_name];
							temp_array.push(temp_object);
							structure_variable_count++;
						}
					}
					else {
						var original_name = Object.keys($scope.received_objects[k]);
						var temp_object = {};
						temp_object[original_name] = $scope.received_objects[k][original_name];
						output_array.push(temp_object);
					}
				}
			}
			/* get the rest in temp_array and push it to the output_array */
			if(temp_array.length !== 0) {
				var temp_object = {};
				temp_object[functionName.outParams[i]] = temp_array;
				output_array.push(temp_object);
			}
			return output_array;
		}
	}
	
	/* get rid off unnecessary string content and extract the import json code and generate object from this json string */
	var _extractSoapResponse_ = function(resp, Sanitise) {
		var o = {};
		if (resp !== "") {
			var ex = extraction_request();
			// console.log(resp);
			var clean = ex.replaceHTMLEntities(resp);
			// console.log(clean);
			var alpha = clean.substring(clean.indexOf('<json>')+6);
			var jsonString = alpha.substring(0, alpha.indexOf('</json>'));
			jsonString = jsonString.replace("^tcp:(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.){3}([01]?\\d\\d?|2[0-4]\\d|25[0-5]):\\d+$|^tcp:localhost:\\d+$", "^tcp:(([01]?\\\\d\\\\d?|2[0-4]\\\\d|25[0-5])\\\\.){3}([01]?\\\\d\\\\d?|2[0-4]\\\\d|25[0-5]):\\\\d+$|^tcp:localhost:\\\\d+$");
			try {
				if (jsonString != "") {
					o = angular.fromJson(jsonString);
					if(angular.isDefined(o.Reason) && o.Reason === 'Session Removed!') {
						window.location.href = 'html/session-lost.html';
						$location.path('html/session-lost.html');
					}
				}
			}
			catch(err) {
				console.error("Error: " + err);
				// console.log('jsonString: ', jsonString);
			}
		}
		return o;
	}
}]);
