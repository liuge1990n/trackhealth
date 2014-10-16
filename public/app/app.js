function mainCtrl($scope, $http){
    //$scope.dummies = ['1','2','3','4'];
	$scope.createhealthData = function() {
		$scope.weightData = {};
		$http.post('/api/users/:userid/weight', $scope.weightData)
			.success(function(data) {
				$scope.weightData = {}; // clear the form so our user is ready to enter another
				$scope.healthdata = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};    
}

