angular.module('root', [])
	.controller('shoppingCtrl', function($scope,$http) {

		var refresh = function() {
			console.log('Trying to refresh');
			$http.get('/itemList').success(function(response) {
				$scope.shoppingList = response;
				$scope.shopInput = "";
				console.log('managed to refresh');
		  });
		};

		refresh();

		var itemAdd = function() {
			$http.post('/itemList',{itemText:$scope.shopInput,done:false}).success(function(response) {
				refresh();
			});
		};

		var itemRemove = function() {
			angular.forEach($scope.shoppingList, function(i) {
				if (i.done) {
					removeEach(i._id);
				};
			});
		};

		var removeEach = function(id) {
			$http.delete('/itemList/' + id).success(function(response) {
			    refresh();
			  });
		};

		var itemCount = function() {
			return $scope.shoppingList.length;
		};

		var clearAll = function() {
			angular.forEach($scope.shoppingList, function (i) {
				removeEach(i._id);
			});
		};

		$scope.itemAdd = itemAdd;
		$scope.itemRemove = itemRemove;
		$scope.itemCount = itemCount;
		$scope.clearAll = clearAll;
	});

