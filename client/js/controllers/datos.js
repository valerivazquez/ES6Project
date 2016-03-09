
var datosCtrl = function (datosFactory,$stateParams, $state){

    var vm = this;
    /**
     * Data for KPI's
     * 
     */

     console.log("$stateParams", $stateParams.month);
     console.log("Parametros dato", $stateParams.dato);

     if(typeof $stateParams.dato === 'undefined'){  // Viene de list o new dato
        vm.data = []

        vm.nuevoDato = {}

        datosFactory.listeningData($stateParams.month || "")
            .success(function (data) {
                data.sort(function(a,b){ // ordenar por fecha
                    var dateA = new Date(a.fecha);
                    var dateB = new Date(b.fecha);
                    return dateB-dateA
                })


                vm.data = data;

        });

     }else{ // Viene del edit
        vm.data = $stateParams.dato;
        vm.data.fecha = new Date($stateParams.dato.fecha) ;
        
     }




     



vm.datosAdd = function () {
    $state.go("datosForm");
}

vm.datosGuardar = function (dato) {
  
    var d = new Date(dato.fecha);

    dato.any = d.getFullYear();
    dato.mes = d.getMonth() + 1;

    datosFactory.postData(dato)
        .success(function (data) {
            if (data.result == 0){
                $state.go("minor");
            } else vm.mensaje = "Fecha ya existente";
        });
}

vm.datosUpdate = function (dato) {
    
    var d = new Date(dato.fecha);

    dato.any = d.getFullYear();
    dato.mes = d.getMonth() + 1;

    datosFactory.updateData(dato)
        .success(function (data) {
            if (data.result == 0){
                $state.go("minor");
            } else vm.mensaje = "Fecha ya existente";
        });
}




vm.datosEditar = function (fecha) {
    
    var d = new Date(fecha);

    fecha = d.getFullYear().toString() + (d.getMonth() + 1).toString();
    
    datosFactory.getData(fecha)
        .success(function (data) {
            if (data.result == 0){
                $state.go("datosEdit", { dato : data.data[0] });
            } else vm.mensaje = "Error!!!!";
        });
        
}


vm.datosBorrar = function (fecha) {

    var d = new Date(fecha);

    fecha = d.getFullYear().toString() + (d.getMonth() + 1).toString();

    datosFactory.deleteData(fecha)
        .success(function (data) {
            $state.go("minor",{}, {reload: true});
        });
        
}








};



angular
    .module('mebsc')
    .controller('datosCtrl', datosCtrl)
