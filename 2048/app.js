angular.module('2048app',[])
	.controller('2048',function ($scope) {
		var size = 4;
		$scope.tiles = Array.apply(null, Array(size * size)).map(Number.prototype.valueOf,NaN);
		console.log($scope.tiles);
	});