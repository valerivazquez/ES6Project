(function () {
    // La factoria ya no almacenrá sus propios datos
    // Mediante el servicio $http hará las llamadas al servidor
    // Es un servicio core y no hay que referenciar ningún módulo extra

        var datosFactory =   function ($http, configFactory)  {
    

        console.log("UrlBase: " + configFactory.gettingUrlBase());

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
        
        factory.gettingLabels =   function (month)  {
            // Estamos devolviendo promesas, no objetos
            return $http.get(urlBase + 'labels' + '/' + month);
        };
        factory.gettingData =   function (month)  {
            return $http.get(urlBase + 'datos' + '/' + month);
        };

        factory.listeningData =   function (month)  {
            return $http.get(urlBase + 'datoslist');
        };

        factory.postData =   function (dato)  {
            return $http.post(urlBase + 'datos', dato);
        };

        factory.getData =   function (fecha)  {
            return $http.get(urlBase + 'datos' + '/' + fecha + '/edit');
        };

        factory.deleteData =   function (fecha)  {
            return $http.get(urlBase + 'datos' + '/' + fecha + '/delete');
        };

        factory.updateData =   function (dato)  {
            return $http.post(urlBase + 'datos/update', dato);
        };
        // Exponemos funionalidad devolviendo el objeto creado, 
        // para que el cliente explote sus métodos 
        return factory;
    };
    
    // se registran dentro de un módulo con la palabra clave factory
    angular.module('mebsc').factory('datosFactory', datosFactory);
}());
