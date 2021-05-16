describe("calculateDistance", function(){
    it("returns the right distance", function(){
        expect(Math.round(calculateDistance(1, 1, 1, 2))).toEqual(111);
    })
})

describe("Number", function(){
    it(".toRad", function(){
        var number = 1 
        expect(number.toRad()).toEqual(Math.PI / 180);
    })
})

describe("App", function(){
    beforeEach(function() {
        app = new App()
    })

    it('.setStartingPosition', function() {
        startingPosition = {latitude: 1, longitude: 1}
        app.setStartingPosition(startingPosition)

        expect(app.startingPosition).toEqual(startingPosition)
    })

    it(".feetTraveled", function(){
        startingPosition = {latitude: 1, longitude: 1}
        nextPosition = {latitude: 1, longitude: 2}
        app.setStartingPosition(startingPosition)

        expect(Math.round(app.feetTraveled(nextPosition))).toEqual(111)
    })
})

