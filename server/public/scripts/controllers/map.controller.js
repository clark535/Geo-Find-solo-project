myApp.controller('MapController', function(MapService) {
    console.log('MapController created');
    var self = this;

    self.zoomedCountry = '';
    self.mapZoom = "https://maps.googleapis.com/maps/api/staticmap?center=" + MapService.zoomedCountry + "&zoom=4&size=1416x680&scale=2&maptype=terrain&key=AIzaSyBXCCVmaJXKRVD4t_t3cCr-pDpV1gy16Gs";
    self.showImage = MapService.showImage;

    console.log(MapService.countries);
    self.countries = MapService.countries;
    MapService.getCountries();

    self.zoomToCountry = function(country) {
        console.log('zoomToCountry clicked');
         MapService.zoomedCountry = country;
         console.log('map zoom is', self.mapZoom);
    }

    self.showImage = function(country) {
        console.log('clicked showImage')
        if (country.show == false) {
            country.show == true
        } else if (country.show == true)
        {
           country.show == false   
        };
    }
});