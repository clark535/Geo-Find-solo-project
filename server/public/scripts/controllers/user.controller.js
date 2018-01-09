myApp.controller('UserController', function(UserService, MapService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.addCountry = UserService.addCountry;
  vm.newCountry = UserService.newCountry;
  vm.countries = MapService.countries;
  
  //for the delete dropdown and function
  MapService.getCountries();  
  vm.countries = MapService.countries;  
  vm.deleteCountry = MapService.deleteCountry;
  // vm.countrySubmitted = UserService.countrySubmitted;

  //Filestack controller
  vm.uploadFlag = UserService.uploadFlag;
  vm.uploadImage1 = UserService.uploadImage1;
  vm.uploadImage2 = UserService.uploadImage2;
});
