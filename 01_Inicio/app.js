angular.module("appMain",[])

.controller("AppController", ['$scope', function($scope){

    $scope.user = {
        name:'Pepe',
        apellido:'Pepito'
    };
    
    $scope.curso='AngularJS';    

    $scope.borrar= function(){
        $scope.user.name='';
        console.dir($scope);
    }
}])

