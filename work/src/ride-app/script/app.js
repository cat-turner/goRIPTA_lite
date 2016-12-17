/**
 * Created by ian on 12/3/2016.
 */

(function () {
    'use strict';


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./src/ride-app/service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
    

})();