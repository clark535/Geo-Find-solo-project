myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;
  self.userObject = {};
  self.newCountry = {};

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    }, function (response) {
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });
  },

    self.logout = function () {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function (response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    }

    //filestack picker functions for image upload on user view
  self.uploadFlag = function () {
    console.log('uploadFlag()')
    var fsClient = filestack.init('AF3T8OSZBQD2kfV6tOFiPz');
    function openPicker() {
      fsClient.pick({
        fromSources: ["local_file_system", "url", "imagesearch", "facebook", "instagram", "googledrive", "dropbox", "evernote", "flickr", "box", "github", "webcam", "video", "audio"],
        maxSize: 102400000,
        maxFiles: 5,
        minFiles: 1,
        imageDim: [400, 250]
      }).then(function (response) {
        // declare this function to handle response
        self.newCountry.imageUrl = response.filesUploaded[0].url;
        console.log(self.userObject, self.newCountry.imageUrl);
        self.newCountry.flag = self.newCountry.imageUrl;
      });
    }
    openPicker();
  }

  self.uploadImage1 = function () {
    console.log('uploadImage1()')
    var fsClient = filestack.init('AF3T8OSZBQD2kfV6tOFiPz');
    function openPicker() {
      fsClient.pick({
        fromSources: ["local_file_system", "url", "imagesearch", "facebook", "instagram", "googledrive", "dropbox", "evernote", "flickr", "box", "github", "webcam", "video", "audio"],
        maxSize: 102400000,
        maxFiles: 5,
        minFiles: 1,
        imageDim: [600, 400]
      }).then(function (response) {
        // declare this function to handle response
        self.newCountry.imageUrl = response.filesUploaded[0].url;
        console.log(self.userObject, self.newCountry.imageUrl);
        self.newCountry.image1 = self.newCountry.imageUrl;
      });
    }
    openPicker();
  }

  self.uploadImage2 = function () {
    console.log('uploadImage2()')
    var fsClient = filestack.init('AF3T8OSZBQD2kfV6tOFiPz');
    function openPicker() {
      fsClient.pick({
        fromSources: ["local_file_system", "url", "imagesearch", "facebook", "instagram", "googledrive", "dropbox", "evernote", "flickr", "box", "github", "webcam", "video", "audio"],
        maxSize: 102400000,
        maxFiles: 5,
        minFiles: 1,
        imageDim: [600, 400]
      }).then(function (response) {
        // declare this function to handle response
        self.newCountry.imageUrl = response.filesUploaded[0].url;
        console.log(self.userObject, self.newCountry.imageUrl);
        self.newCountry.image2 = self.newCountry.imageUrl;
      });
    }
    openPicker();
  }//end filestack functions

  //adding a country function in user view
  self.addCountry = function () {
    console.log('in addCountry');
    // self.countrySubmitted = true;
    $http({
      method: 'POST',
      url: '/user/country',
      data: self.newCountry
    }).then(function (response) {
      console.log('response', response);
      self.newCountry.country = '';
      self.newCountry.video = '';
    })
  }
});
