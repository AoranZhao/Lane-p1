var app = angular.module('myApp', []);

var inavi_list = [
	{name: 'Rotate 45 degree', id: 'rotate'},
	{name: 'Translate -40px', id: 'translate'},
	{name: 'Opacity', id: 'opacity'},
	{name: 'Scale', id: 'scale'}
];
var avi_list = [];
var image = document.getElementById('img');

app.controller('myCtrl', function($scope) {
	$scope.inavi_list = inavi_list;
	$scope.avi_list = avi_list;

	/* invoke this function when reset button is pushed, reset two action lists and image style*/
	$scope.reset = function() {
		$scope.inavi_list = [
			{name: 'Rotate 45 degree', id: 'rotate'},
			{name: 'Translate -40px', id: 'translate'},
			{name: 'Opacity', id: 'opacity'},
			{name: 'Scale', id: 'scale'}
		];
		$scope.avi_list = [];
		image.style.transform = "";
		image.style.opacity = 1;
	}
			
});