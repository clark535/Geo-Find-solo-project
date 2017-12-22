myApp.controller('MapController', function(MapService) {
    console.log('MapController created');
    var self = this;

    console.log(MapService.countries);
    self.countries = MapService.countries;
    MapService.getCountries();

});