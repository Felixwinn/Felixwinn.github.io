function mapLoad(){
    //Define the coordinate
        var latLng = {
            lat: Number(document.getElementById("lat").value), lng: Number(document.getElementById("lng").value)
        };

        var itemTitle = String(document.getElementById("itemName").value);
    
    //set attribution and access key URL
        var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVsaXh3aW4iLCJhIjoiY2xnOTMwMDU4MTM1dzNncXJwNGtua29iNSJ9.273VFcJdLUfewc1gBWvhRQ';
    
    //Define two tile layer variables
        var grayscale = L.tileLayer(mbUrl, {
            id: 'mapbox/light-v9', 
            tileSize: 512,
            zoomOffset: -1, 
            attribution: mbAttr}), 
            streets = L.tileLayer(mbUrl, {
            id:'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            attribution: mbAttr
        });
    
    //Define map object
        var map = L.map('map', {
            center: latLng,
            zoom: 16,
            layers: [streets]
        });
    
    //Add tile layers to base layer project
    //Add to the map
    //Add a marker with pop-up
    
        var baseLayers = {
            "Grayscale": grayscale,
            "Streets": streets
        };
    
        L.control.layers(baseLayers).addTo(map);
        L.marker(latLng).addTo(map)
        .bindPopup(itemTitle).openPopup(); 
    
    //Add a nifty click event
        var popup = L.popup();
            function onMapClick(e) {
            popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
        }
        map.on('click', onMapClick);
    }
    