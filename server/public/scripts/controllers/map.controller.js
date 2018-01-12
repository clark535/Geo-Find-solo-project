myApp.controller('MapController', function (MapService) {
    console.log('MapController created');
    var self = this;

    //variable used for displaying the correct country on zoom view
    self.zoomedCountry = '';

    //actual variable opperating the googleMaps static API for the zoom feature
    self.mapZoom = "https://maps.googleapis.com/maps/api/staticmap?center=" + MapService.zoomedCountry + "&zoom=4&size=680x480&scale=2&style=feature:administrative.country|element:geometry.stroke|color:red&maptype=terrain&key=AIzaSyBXCCVmaJXKRVD4t_t3cCr-pDpV1gy16Gs";
    
    //setting the limit for flag objects to display on map view
    self.flagLimit = 5;



    //MapServices
    console.log(MapService.countries);
    self.countries = MapService.countries;
    MapService.getCountries();
    self.countryMedia = MapService.countryMedia;
    self.mediaDisplay = MapService.mediaDisplay;

    //function adding country name into map API and adding the audio feature to speak the name of zoomed country!
    self.zoomToCountry = function (country) {
        console.log('zoomToCountry clicked');
        MapService.zoomedCountry = country;
        var msg = new SpeechSynthesisUtterance(MapService.zoomedCountry);
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[17]; // Note: voices are unpredictable at the moment, still experimental tech. 7 is the clearest male, 17 the clearest female
        msg.voiceURI = 'native';
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
        console.log('map zoom is', self.mapZoom);
    }
});