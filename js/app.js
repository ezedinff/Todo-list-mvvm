(function () {
    var app = angular.module('todo', []);
    app.controller('maincontroller', maincontroller);
    maincontroller.$inject = ['$scope'];
    function maincontroller($scope) {
        $scope.todos = [];
        $scope.buttonClass = 'btn-primary';
        $scope.buttonLabel = 'add';
        $scope.index = 0;
        $scope.add =  function (value) {
            if ($scope.buttonLabel === 'add') {
                $scope.todos.push(value);
                $scope.task = '';
            }else{
                $scope.todos[$scope.index] = value;
                $scope.buttonLabel = 'add';
                $scope.buttonClass = 'btn-primary';
                $scope.task = '';
            }
        };
        $scope.remove = function (index) {
            if (index > -1){
                $scope.todos.splice(index,1);
            }
        };
        $scope.edit = function (index) {
            $scope.task = $scope.todos[index];
            $scope.buttonClass = 'btn-success';
            $scope.buttonLabel = 'update';
            $scope.index = index;
        }
    }
})();