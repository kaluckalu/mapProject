angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }


    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.locationLat = pos.coords.latitude;
      $scope.locationLong = pos.coords.longitude;
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });


  };

  $scope.addMarker = function(feature){
     var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });

  }
  var icons = {
        person: {
          icon: 'img/people.png'
        }
      };
  var feature = [
          {
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'person'
          }
          ];
  $scope.addMarker(feature);

});