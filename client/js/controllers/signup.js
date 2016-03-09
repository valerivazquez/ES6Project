angular.module('mebsc')
  .controller('SignupCtrl', function($scope, $alert, $auth) {
    $scope.signup = function() {
      console.log("En SignupCtrl");
      $auth.signup({
        displayName: $scope.displayName,
        email: $scope.email,
        password: $scope.password
      }).catch(function(response) {
        if (typeof response.data.message === 'object') {
          console.log("ALERT-1");
          angular.forEach(response.data.message, function(message) {
            $alert({
              content: message[0],
              animation: 'fadeZoomFadeDown',
              type: 'info',
              duration: 3
            });
          });
        } else {
          console.log("ALERT-2",response.data.message);
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'info',
            duration: 3
          });
        }
      });
    };
  });