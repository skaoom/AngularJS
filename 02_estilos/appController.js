angular.module("appMain")

.controller("AppController", AppController)


function AppController(){

    this.user = {
        name:'Pepe',
        apellido:'Pepito'
    };
    
    this.curso='AngularJS';    

    this.borrar= function(){
        this.user.name='';
    }
}


