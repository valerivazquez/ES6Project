(function () {
    // La factoria ya no almacenrá sus propios datos
    // Mediante el servicio $http hará las llamadas al servidor
    // Es un servicio core y no hay que referenciar ningún módulo extra
    var configFactory =   function ()  {
    
        var urlBase = "http://localhost:3000/api/";
    
        var factory = {};

        factory.gettingUrlBase =   function ()  {
            // Estamos devolviendo promesas, no objetos
            return urlBase;
        };
      
        // Exponemos funionalidad devolviendo el objeto creado, 
        // para que el cliente explote sus métodos 
        return factory;
    };
    
    // se registran dentro de un módulo con la palabra clave factory
    angular.module('mebsc').factory('configFactory', configFactory);
}());
