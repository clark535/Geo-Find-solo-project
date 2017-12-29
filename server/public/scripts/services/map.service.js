myApp.service('MapService', function($http, $location){
    console.log('MapService Loaded');
    var self = this;

    self.zoomedCountry = '';

    self.countryMedia = '';    

    self.countries = {list: [] };

    self.mediaDisplay = function(country) {
        console.log('mediaDisplay is running', country);
        self.countryMedia = country;
    }

    //GET function pulling the entire array fo opbjects from the countries table in the DB.
    self.getCountries = function() {
        $http({
         method: 'GET',
         url: '/map'         
         }).then(function(response) {
             console.log('response', response);
             self.countries.list = response.data;//this fills up the countries array with the table from the database.          
     });
    }
    
    self.deleteCountry = function(deleteCountry) {
        console.log('delete button was clicked')
        $http({
            method: 'DELETE',
            url: '/map/',
            params: deleteCountry       
            }).then(function(response) {
                
                self.getCountries();
                
            })
        };
});