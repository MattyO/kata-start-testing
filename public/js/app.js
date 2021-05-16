class App {
    constructor(page){
    }

    setStartingPosition(startingPosition){
        this.startingPosition  = startingPosition;
    }

    feetTraveled(anotherPosition) {
        return calculateDistance(
            this.startingPosition.latitude,
            this.startingPosition.longitude,
            anotherPosition.latitude,
            anotherPosition.longitude
        )
    }

    start() {
        var that = this;
        Page.currentPosition(function(position){
            console.log('getting starting position');
            that.setStartingPosition(position)
        })

        Page.setInterval(function(){
            Page.currentPosition(function(position){
                Page.setContent("distanceTraveled", that.feetTraveled(position));
            });
        }, 5000)
    }

}
