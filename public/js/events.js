Page.onLoad(function(){
    var app = new App();

    Page.currentPosition(function(position){
        console.log('getting starting position');
        app.setStartingPosition(position)
    })

    Page.setInterval(function(){
        Page.currentPosition(function(position){
                document.getElementById("distanceTraveled").innerHTML = app.feetTraveled(position);
        });
    }, 5000)

})
