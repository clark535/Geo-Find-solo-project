myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.addCountry = UserService.addCountry;
  vm.newCountry = UserService.newCountry;

  //Filestack controller
  vm.uploadFlag = UserService.uploadFlag;
  vm.uploadImage1 = UserService.uploadImage1;
  vm.uploadImage2 = UserService.uploadImage2;
  vm.uploadVideo = UserService.uploadVideo;
});
