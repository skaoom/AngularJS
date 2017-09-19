angular.module("appMain")
.controller("AppController", AppController)

function AppController(){

    incremento: 10;
    
    this.suma= function(){
        this.incremento = this.incremento+this.incremento;
    }

    this.resta= function(){
        this.incremento = this.incremento-this.incremento;
    }

}