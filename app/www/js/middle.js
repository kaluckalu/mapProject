angular.module('starter.middle', [])
var unilagGate = [];
var FacultyofEducation = [];
var cabPark = [];
var BiobakuHall = [];
var QueenAminaHall = [];
var multiPurposeHall = [];
var FacultyOfEnvironmentalSciences = [];
var sportsCenter = [];
var church = [];
var mosque = [];
var FacultyofSocialSciences = [];
var newHall = [];
var shuttlePark = [];
var cits = [];
var massComm = [];
var FacultyofArts = [];
var bookShop = [];
var secondCabPark = [];
var moremiHall = [];
var senateHouse = [];
var mariereHall = [];
var FacultyofScience = [];
var internationalSchool = [];
var medicalCenter = [];
var FacultyofEngineering = [];
var FacultyofLaw = [];
var lagoonFront = [];
var architecture = [];
var botanicalGardens = [];
var library = [];

onlocation = function($scope, destination){
	location = getPresentLocation();
	for i in range(0, destination.length){
		if location == destination[i]{
			return true;
		}
		else{
			return false;
		}

	}
}

getPresentLocation = function($scope){
	 navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }
}

