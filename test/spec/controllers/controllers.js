'use strict';

describe('Controller: PageTemplateController', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var PageTemplateController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageTemplateController = $controller('PageTemplateController', {
      $scope: scope
    });
  }));

  it('should attach a list of portfolio to the scope', function () {
    expect(scope.portfolio.length).toBe(0);
  });

  it('should attach ptIndex to the scope', function () {
    expect(scope.ptIndex).toBe(0);
  });

  it('should attach dataSourceUrl to the scope', function () {
    expect(scope.dataSourceUrl).toBe('http://localhost:8088');
  });
});
