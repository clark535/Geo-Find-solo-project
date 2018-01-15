myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');
    var self = this;

    //variable used for displaying the correct country on zoom view
    self.zoomedCountry = '';

    //images and video to display on zoom
    self.countryMedia = '';

    //array of country objects from DB
    self.countries = { list: [] };

    //function to display the images and video on zoom view for the corresponding country object
    self.mediaDisplay = function (country) {
        console.log('mediaDisplay is running', country);
        self.countryMedia = country;
    }

    //GET function pulling the entire array fo objects from the countries table in the DB.
    self.getCountries = function () {
        $http({
            method: 'GET',
            url: '/map'
        }).then(function (response) {
            console.log('response', response);
            self.countries.list = response.data;//this fills up the countries array with the table from the database.          
        });
    }

    //DELETE function taking in object to delete from dropdown in user view
    self.deleteCountry = function (deleteCountry) {
        console.log('delete button was clicked')
        $http({
            method: 'DELETE',
            url: '/map/',
            params: deleteCountry
        }).then(function (response) {
            self.getCountries();
        })
    };

    //PUT function to change the order_id in DB to dictate which flags are displayed on map view
    self.changeOrder = function () {
        $http({
            method: 'PUT',
            url: '/map/',
            data: self.countries.list
        }).then(function (response) {
            console.log('response', response);
        });
            self.getCountries();
    };
});