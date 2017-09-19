class AppMain {

    $onInit () {
        this.nombre = '';
        this.nuevoPensamiento = '';
        this.aPensamientos = [];  //array inicializado
        console.dir(this);
    }

    btnClic () {
        this.aPensamientos.push(this.nuevoPensamiento);  //no da error pq hemos inicializado el array
        this.nuevoPensamiento = '';
         console.dir(this);
    }

}

angular.module("app", [])
.controller("AppMain", AppMain)


