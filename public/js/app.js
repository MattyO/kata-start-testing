$(document).ready(function(){
    var startPosition;

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log('getting starting position');
        startPosition = position;
    })

    interval_id = setInterval(function(){
        navigator.geolocation.getCurrentPosition(function(position) {
            if(startPosition){
                var feetTraveled = calculateDistance(
                    startPosition.coords.latitude, 
                    startPosition.coords.longitude,
                    position.coords.latitude, 
                    position.coords.longitude);

                document.getElementById("distanceTraveled").innerHTML = feetTraveled ;
            }
        });
    }, 5000)

})
