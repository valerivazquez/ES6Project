/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $authProvider) {
    $urlRouterProvider.otherwise("/minor");
    console.log("En config2, $auth." +$authProvider.signupUrl, "state"+ $stateProvider.state);
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'SignupCtrl'
        })
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })
        .state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }

        })

        .state('main/month', {
            url: "/main/:month",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }

        })
        .state('minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Mantenimiento Datos' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }
        })


        .state('datosForm', {
            url: "/datosForm",
            templateUrl: "views/forms/datos.html",
            data: { pageTitle: 'Añadir Datos' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }
        })

        .state('datosEdit', {
            url: "/datosEdit/:dato",
            templateUrl: "views/forms/datosEdit.html",
            data: { pageTitle: 'Editar Datos' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }
        })

        .state('mochila', {
            url: "/mochila",
            templateUrl: "views/mochila.html",
            data: { pageTitle: 'Mantenimiento Mochila' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }
        })


        .state('datosmForm', {
            url: "/datosmForm",
            templateUrl: "views/forms/datosm.html",
            data: { pageTitle: 'Añadir Datosm' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }
        })

        .state('datosmEdit', {
            url: "/datosmEdit/:dato",
            templateUrl: "views/forms/datosmEdit.html",
            data: { pageTitle: 'Editar Datosm' },
            resolve: {
             authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
             }
            }
        })

}
angular
    .module('mebsc')
    .config(config);

/*
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state, $auth) {
        $rootScope.$state = $state;
        $rootScope.$auth = $auth;
    });

*/

