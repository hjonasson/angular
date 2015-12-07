angular.module('root', [])
	.controller('calCtrl', function($scope,$http) {
		$scope.dateList = [];

	    $scope.actAdd = function() {
	        $scope.dateList.push({itemDate:$scope.actInput, itemText:$scope.dateInput});
	        $scope.actInput = '';
	        $scope.dateInput = '';
	    };

	    $scope.remove = function() {
	        var oldList = $scope.dateList;
	        $scope.dateList = [];
	        angular.forEach(oldList, function(x) {
	            if (!x.done) $scope.dateList.push(x);
	        });
	    };
	});

