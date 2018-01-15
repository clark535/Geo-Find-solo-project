myApp.controller('UserController', function(UserService, MapService) {
  console.log('UserController created');
  var vm = this;

  //UserServices
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.addCountry = UserService.addCountry;
  vm.newCountry = UserService.newCountry;
  
  //MapServices
  MapService.getCountries();  
  vm.countries = MapService.countries;  
  vm.deleteCountry = MapService.deleteCountry;
  vm.changeOrder = MapService.changeOrder;

  //Filestack controller
  vm.uploadFlag = UserService.uploadFlag;
  vm.uploadImage1 = UserService.uploadImage1;
  vm.uploadImage2 = UserService.uploadImage2;

  vm.videoParser = function(videoId) {
    var videoUrl = videoId.slice(17);
    vm.newCountry.video = videoUrl;
    console.log('videoParser triggered', videoUrl);
  }
});
