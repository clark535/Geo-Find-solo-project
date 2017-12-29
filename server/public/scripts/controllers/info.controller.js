myApp.controller('InfoController', function(UserService, MapService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.countries = MapService.countries;
  MapService.getCountries();
  

  //Filestack controller
  vm.uploadFlag = UserService.uploadFlag;
  vm.uploadImage1 = UserService.uploadImage1;
  vm.uploadImage2 = UserService.uploadImage2;
  vm.uploadVideo = UserService.uploadVideo;
});
