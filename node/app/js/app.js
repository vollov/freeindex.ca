'use strict';

var clientApp = angular.module('appModule', []);

clientApp.config(function($routeProvider, $locationProvider) {

	$routeProvider.when('/', {
		templateUrl : 'views/home.html'
	}).when('/service', {
		templateUrl : 'views/service.html'
	}).when('/about', {
		templateUrl : 'views/about.html'
	}).when('/500', {
		templateUrl : 'views/500.tpl.html'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});


