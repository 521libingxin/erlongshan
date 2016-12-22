/* directive sections */
web.directive('largeIconButton', ['$location', 'GoToPath', function($location, GoToPath) {
    return {
        restrict:'AE',
        replace:'true',
        scope: {
            caption:'@',
            icon:'@',
            destination:'@',
            id: '@'
        },
        templateUrl: 'html/templates/largeIconButton.html',
        link: function(scope, elem, attrs) {
			scope.id = scope.id.replace(' ', '-').replace(' ', '');
            scope.go = function() {
                $location.path(GoToPath.encode(scope.destination));
            }
        }
    };
}]);

web.directive('largeSettingsMenuIconButton', ['$location', 'GoToPath', function($location, GoToPath) {
    return {
        restrict:'AE',
        replace:'true',
        scope: {
            caption:'@',
            icon:'@',
            destination:'@'
        },
        templateUrl: 'html/templates/settingsMenuTabButton.html',
        link: function(scope, elem, attrs) {
            scope.go = function() {
                $location.path(GoToPath.encode(scope.destination));
            }
        }
    };
}]);

web.directive('navIconButton', ['$location', function($location) {
    return {
        restrict: 'AE',
        replace: 'true',
        scope: {
            caption: '@',
            icon: '@',
            destination: '@'
        },
        templateUrl: 'html/templates/settingsButton.html',
        link: function(scope, elem, attrs) {
            scope.menuId = $location.path().replace('/', "");
            scope.go = function() {
                scope.$parent.go(scope.destination);
            }
        }
    };
}]);

web.directive('contentArea', [function() {
    return {
        restrict:'E',
		// transclude: true,
        // replace:'true',
        scope: true,
        templateUrl:'html/templates/content.html',
        link: function(scope, elem, attrs) {
			
			scope.setTextContent = function(parameterFieldName) {
				var param = document.getElementById(parameterFieldName).value;
				// if(eval('WriteLiveObjectText'))
					// scope.CallInterCommFunction(WriteLiveObjectText, ['Text 1', param]);
				// else
					// scope.CallInterCommFunction(eval('WriteLiveObjectText'), ['Text 1', param]);
			}
			// console.log(scope.$parent);
            // scope.go = function() {
				// $location.path(GoToPath.encode(scope.destination));
				// scope.$parent.go(scope.destination);
            // }
        }
    };
}]);

web.directive('contentOverlay', [function() {
    return {
        restrict:'E',
		// transclude: true,
        replace:'true',
        scope: true,
        templateUrl:'html/templates/contentOverlay.html',
        link: function(scope, elem, attrs) {
			if(scope.overlay === undefined || scope.overlay === false)
				scope.overlay = true;
			else
				scope.overlay = false;
        }
    };
}]);