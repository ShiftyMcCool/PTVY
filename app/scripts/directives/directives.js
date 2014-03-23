'use strict';

var ptDirectives = angular.module('pageTemplateDirectives',[]);

ptDirectives.directive('onChange', function() {    
  return {
    restrict: 'A',
    scope:{'onChange':'=' },
    link: function(scope, elm, attrs) {
      scope.$watch('onChange', function(nVal) { elm.val(nVal); });

      elm.bind('blur', function() {
        var currentValue = elm.val();
        
        if( scope.onChange !== currentValue ) {
          scope.$apply(function() {
           scope.onChange = currentValue;
          });
        }
      });
    }
  };        
});