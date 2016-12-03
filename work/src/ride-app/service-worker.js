/**
 * Created by Jameson on 12/3/2016.
 */
// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var dataCacheName = 'goRiptaLiteData-v1';
var cacheName = 'goRiptaLitePWA-final-1';
/*Files to cache for the app shell*/
var filesToCache = [
    '/',
    '/src/ride-app/ride-app.html',
    '/src/ride-app/script/parse.js',
    '/src/ride-app/script/app.js'
];


self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
/*install the event listener and cache the app shell*/
self.addEventListener('install', function(e){
   console.log('[ServiceWorker] Install');
   e.waitUntil(
       caches.open(cacheName).then(function(cache) {
           console.log('[ServiceWorker] Caching app shell');
           return cache.addAll(filesToCache);
       })
   );
});

/* Activate the even listener and remove any old cache*/
self.addEventListener('activate', function(e){
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                if (key !== cacheName && key !== dataCacheName){
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    /*
     * Fixes a corner case in which the app wasn't returning the latest data.
     * The code below essentially lets you activate the service worker faster.
     */
    return self.clients.claim();
});

/*Fetching*/
self.addEventListener('fetch', function(e){
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = 'https://riptapi.herokuapp.com/api/tripupdates/route/60';
    if (e.request.url.indexOf(dataUrl) > -1){
        e.respondWith(
            caches.open(dataCacheName).then(function(cache){
                return fetch(e.request).then(function(response){
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
        );
    } else {
        e.respondWith(
            caches.match(e.request).then(function(response){
                return response || fetch(e.request);
            })
        );
    }
});
