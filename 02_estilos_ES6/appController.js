class AppController{
    
    constructor(){ }

    $onInit(){
        this.user = {
            name:'Pepe',
            apellido:'Pepito'
        };            
        this.curso='AngularJS';   
    }
     
    borrar(){
       this.user.name='';
    }
}
    
angular.module("appMain")
.controller("AppController", AppController)
