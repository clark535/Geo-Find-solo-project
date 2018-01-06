myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.addCountry = UserService.addCountry;
  vm.newCountry = UserService.newCountry;
  // vm.countrySubmitted = UserService.countrySubmitted;

  //Filestack controller
  vm.uploadFlag = UserService.uploadFlag;
  vm.uploadImage1 = UserService.uploadImage1;
  vm.uploadImage2 = UserService.uploadImage2;
});
