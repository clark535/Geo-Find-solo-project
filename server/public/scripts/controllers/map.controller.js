myApp.controller('MapController', function(MapService) {
    console.log('MapController created');
    var self = this;

    self.zoomedCountry = '';
    self.mapZoom = "https://maps.googleapis.com/maps/api/staticmap?center=" + MapService.zoomedCountry + "&zoom=4&size=1416x680&scale=2&style=feature:administrative.country|element:geometry.stroke|color:red&maptype=terrain&key=AIzaSyBXCCVmaJXKRVD4t_t3cCr-pDpV1gy16Gs";
    

    console.log(MapService.countries);
    self.countries = MapService.countries;
    MapService.getCountries();
    self.countryMedia = MapService.countryMedia;
    self.mediaDisplay = MapService.mediaDisplay;

    self.zoomToCountry = function(country) {
        console.log('zoomToCountry clicked');
         MapService.zoomedCountry = country;
         var msg = new SpeechSynthesisUtterance(MapService.zoomedCountry);
         var voices = window.speechSynthesis.getVoices();
         msg.voice = voices[1]; // Note: some voices don't support altering params
         msg.voiceURI = 'native';         
         window.speechSynthesis.speak(msg);
         console.log('map zoom is', self.mapZoom);
    }   
});