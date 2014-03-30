'use strict';

var ptServices = angular.module('pageTemplateServices',[]);

ptServices.factory('portfolio', function($http){
  return {
    getPortfolio: function($scope) {
      return $http.get($scope.dataSourceUrl + '/get');
    },
    getPageTemplate: function($scope,id) {
      angular.forEach($scope.portfolio, function(value, key){
        if(value.id == id){
          $scope.ptIndex = key;
          $scope.thisTemplate = angular.copy($scope.portfolio[key]);
        }
      });
    },
    addPageTemplate: function($scope,index) {
      $scope.portfolio.push({
        id:$scope.thisTemplate.id, 
        title:$scope.thisTemplate.title,
        description:$scope.thisTemplate.description,
        cost:$scope.thisTemplate.cost,
        smallpic:$scope.thisTemplate.smallpic,
        largepic:$scope.thisTemplate.largepic
      });

      this.persistData($scope);
    },
    updatePageTemplate: function($scope,index) {
      $scope.portfolio[index] = $scope.thisTemplate;
      $scope.thisTemplate = "";

      this.persistData($scope);
    },
    deletePageTemplate: function($scope,index) {
      $scope.portfolio.splice(index,1);

      this.persistData($scope);
    },
    persistData: function($scope) {
      $http.post($scope.dataSourceUrl + '/save', $scope.portfolio);      
    }
  };
});