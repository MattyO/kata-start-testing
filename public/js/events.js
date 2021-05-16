$(document).ready(function(){
    var app = new App()

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log('getting starting position');
        app.setStartPosition(position)
    })

    interval_id = setInterval(function(){
        navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById("distanceTraveled").innerHTML = app.feetTraveled(position);
            }
        });
    }, 5000)

})
