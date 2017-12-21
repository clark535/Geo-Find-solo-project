myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.addCountry = UserService.addCountry;
  vm.newCountry = UserService.newCountry;

  //Filestack controller
  vm.uploadImage = UserService.uploadImage;
});
