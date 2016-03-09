(function () {
    // La factoria ya no almacenrá sus propios datos
    // Mediante el servicio $http hará las llamadas al servidor
    // Es un servicio core y no hay que referenciar ningún módulo extra

        var kpidatosmFactory =   function ($http, configFactory)  {

        var urlBase = configFactory.gettingUrlBase();

        // Normalmente estos datos se persisten en servidores remotos
        // o al menos se almacenan en el browser
        var total = {
            ingresos: 0,
            gastos: 0
        };
        var factory  =   {};

        // se produce un cambio en la nomenclatura
        // al usar el gerundio indicamos un proceso no terminado
        // el controlador que lo consuma debe manejar la promesa
        
//        factory.gettingKpi =   function (id_kpi)  {
        factory.gettingKpi =   function (month)  {
            // Estamos devolviendo promesas, no objetos
//            return $http.get(urlBase + 'kpi/' + id_kpi);
            return $http.get(urlBase + 'kpi/datosm/' + month);

        };
 
        // Exponemos funionalidad devolviendo el objeto creado, 
        // para que el cliente explote sus métodos 
        return factory;
    };
    
    // se registran dentro de un módulo con la palabra clave factory
    angular.module('mebsc').factory('kpidatosmFactory', kpidatosmFactory);
}());
