
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYXkxMSIsImEiOiJja2hjd3lzaG0wMDhpMnhsbXVucXVzcDB2In0.XzZRaC-KUKUdArtM51E0qA';
    
    navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy : true})

    function successLocation(position){
      console.log(position);
      setupMap([position.coords.longitude , position.coords.latitude])
    }

    function errorLocation(){
        setupMap([-2.24,53.8])
    }

    function setupMap(center){
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom: 12
        })

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);

        var directions = new MapboxDirections({
            accessToken:  mapboxgl.accessToken
          });
          
          map.addControl(directions, 'top-left');
    }