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

describe("Page", function() {
    beforeEach(function(){
        page = new Page()
    });

    describe(".onLoad", function() {
        beforeEach(function(){
            callbackCalled = false
        });

        it('calls callback when readyState is complete', function(done){
            spyOnProperty(document, "readyState", "get").and.returnValue('complete');

            page.onLoad(function(){
                callbackCalled  = true;
                done();
            });

            expect(callbackCalled).toEqual(true);
        });

        it('calls callback when readyState is not loading and is not doScroll', function(done){
            spyOnProperty(document, "readyState", "get").and.returnValue('notloading');
            spyOnProperty(document, "documentElement", "get").and.returnValue({'doScroll': false});

            page.onLoad(function(){
                callbackCalled  = true;
                done();
            });

            expect(callbackCalled).toEqual(true);
        });

        it('regesters callback to the DOMContentLoaded event', function(){
            spyOnProperty(document, "readyState", "get").and.returnValue('loading');
            addEventListenerSpy = spyOn(document, "addEventListener");
            function callback(){
                callbackCalled  = true;
                done();
            }

            page.onLoad(callback)

            expect(callbackCalled).toEqual(false);
            expect(addEventListenerSpy).toHaveBeenCalledWith("DOMContentLoaded", callback);
        });

    })
})
