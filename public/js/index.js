(function() {


    var index = angular.module('index', ['ngResource','ngRoute','data','resources','helper','login','comments']);

    
 
    index.
        config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/recipe', {templateUrl: 'partial/recipe-list.html',   controller: 'RecipeListCtrl'}).
                when('/recipe/edit/:recipeId', {templateUrl: 'partial/recipe-detail.html', controller: 'RecipeDetailCtrl'}).
                when('/recipe/clone/:recipeId', {templateUrl: 'partial/recipe-detail.html', controller: 'RecipeDetailCtrl'}).
                when('/recipe/new', {templateUrl: 'partial/recipe-detail.html', controller: 'RecipeDetailCtrl'}).
                otherwise({redirectTo: '/recipe'});
    }]);

    index.controller("ShareController", function($scope) {
        $scope.recipe = Recipe.get({id:$routeParams.recipeId});
    });

    index.controller("MainController",function($scope,$rootScope) {
        $rootScope.breadcrumbs = [];
        
        $scope.login = function() {
            var button = $($($("#signinButton").children()[0]).children()[0])
            button.click();
        };
    });




})();