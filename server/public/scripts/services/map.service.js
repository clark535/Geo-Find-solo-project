myApp.service('MapService', function($http, $location){
    console.log('MapService Loaded');
    var self = this;

    self.zoomedCountry = '';

    self.countries = {list: [] };

    self.getCountries = function() {
        $http({
         method: 'GET',
         url: '/map'         
         }).then(function(response) {
             console.log('response', response);
             self.countries.list = response.data;//this fills up the countries array with the table from the database.          
     });
     }  
});