class Page {
    static onLoad(callback) {
        if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)
        ) {
            console.log('calling callback');
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    }

    static currentPosition(callback) {
        navigator.geolocation.getCurrentPosition(function(position) {
            callback(position.coords);
        });
    }

    static setInterval(callback, intervalTimeInMiliseconds) {
        setInterval(callback,intervalTimeInMiliseconds); 
    }

    static setContent(id, content){
        document.getElementById(id).innerHTML = content;
    }
}
