angular.module('mebsc')
  .controller('LogoutCtrl', function($auth, $alert) {
    if (!$auth.isAuthenticated()) {
        console.log("Logout-1");
        return;
    }
    $auth.logout()
      .then(function() {
        console.log("Logout-2");

        $alert({
          content: 'You have been logged out',
          animation: 'fadeZoomFadeDown',
          type: 'info',
          duration: 3
        });
      });
  });