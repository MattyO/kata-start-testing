class App {
    constructor(startingPosition){
        this.startingPosition = startingPosition
    }

    feetTraveled(anotherPosition) {
        return calculateDistance(
            this.startingPosition.latitude,
            this.startingPosition.longitude,
            anotherPosition.latitude,
            anotherPosition.longitude
        )
    }

}
