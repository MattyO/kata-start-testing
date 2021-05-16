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

    describe(".onLoad", function() {
        beforeEach(function(){
            callbackCalled = false
        });

        it('calls callback when readyState is complete', function(done){
            spyOnProperty(document, "readyState", "get").and.returnValue('complete');

            Page.onLoad(function(){
                callbackCalled  = true;
                done();
            });

            expect(callbackCalled).toEqual(true);
        });

        it('calls callback when readyState is not loading and is not doScroll', function(done){
            spyOnProperty(document, "readyState", "get").and.returnValue('notloading');
            spyOnProperty(document, "documentElement", "get").and.returnValue({'doScroll': false});

            Page.onLoad(function(){
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

            Page.onLoad(callback)

            expect(callbackCalled).toEqual(false);
            expect(addEventListenerSpy).toHaveBeenCalledWith("DOMContentLoaded", callback);
        });

    })
    describe(".currentPosition", function() {
        it("returns the position to the callback", function(done){
            currentPosition = {latitude: 1, longitude: 1}
            callbackCalled  = false;
            callbackArgs = undefined;

            function tcallback(args){
                callbackArgs = args
                done();
            }
            currentPositionSpy = spyOn(navigator.geolocation, "getCurrentPosition").and
                .callFake(function(callback) {
                    callback(currentPosition);
                });
            Page.currentPosition(tcallback);

            expect(callbackArgs).toEqual(currentPosition)
        })
    })

    describe(".setInterval", function() {
        var callbackSpy

        beforeEach( function(){
            callbackSpy = jasmine.createSpy("callback");
            jasmine.clock().install()
        })

        afterEach(function() {
            jasmine.clock().uninstall()
        })

        it('call set interval', function() {
            Page.setInterval(function(){
                callbackSpy();
            }, 1000);

            jasmine.clock().tick(999)
            expect(callbackSpy).not.toHaveBeenCalled()
            jasmine.clock().tick(2)
            expect(callbackSpy).toHaveBeenCalled()
        });




    })
})
