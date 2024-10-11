/*// The name of the cache your app uses.
const CACHE_NAME = "web-app-cache";
// The list of static files your app needs to start.
const PRE_CACHED_RESOURCES = ["/", "/index.html", "/style.css", "/composeApp.js", "/images/smallicon.png", "/images/largeicon.png"];

// Listen to the `install` event.
self.addEventListener("install", event => {
  async function preCacheResources() {
    // Open the app's cache.
    const cache = await caches.open(CACHE_NAME);
    // Cache all static resources.
    cache.addAll(PRE_CACHED_RESOURCES);
  }

  event.waitUntil(preCacheResources());
});

// Listen to the `activate` event to clear old caches.
self.addEventListener("activate", event => {
  async function deleteOldCaches() {
    // List all caches by their names.
    const names = await caches.keys();
    await Promise.all(names.map(name => {
      if (name !== CACHE_NAME) {
        // If a cache's name is the current name, delete it.
        return caches.delete(name);
      }
    }));
  }

  event.waitUntil(deleteOldCaches());
});

self.addEventListener("fetch", event => {
  async function returnCachedResource() {
    // Open the app's cache.
    const cache = await caches.open(CACHE_NAME);
    // Find the response that was pre-cached during the `install` event.
    const cachedResponse = await cache.match(event.request.url);

    if (cachedResponse) {
      // Return the resource.
      return cachedResponse;
    } else {
      // The resource wasn't found in the cache, so fetch it from the network.
      const fetchResponse = await fetch(event.request.url);
      // Put the response in cache.
      cache.put(event.request.url, fetchResponse.clone());
      // And return the response.
      return fetchResponse.
    }
  }

  event.respondWith(returnCachedResource());
});*/

/*self.addEventListener("install", function(event) {

  event.waitUntil(caches.open("web-app").then(function(cache) {

    return cache.addAll([ "/", "/index.html", "/style.css", "/composeApp.js", "/images/smallicon.png", "/images/largeicon.png"]).then(function() {

      //self.skipWaiting();

    });

  }));

});
self.addEventListener("activate",  function(event) {

  event.waitUntil(self.clients.claim());

});
self.addEventListener("fetch", function(event) {

  event.respondWith(caches.match(event.request).then(function(response) {

    return response || fetch(event.request);

  }));

});*/

// The name of the cache your app uses.
const CACHE_NAME = "web-app-cache-v5";
// The list of static files your app needs to start.
const PRE_CACHED_RESOURCES = ["/", "/index.html", "/styles.css", "/composeApp.js", "/images/smallicon.png", "/images/largeicon.png"];

/*
self.addEventListener("activate", event => {
  console.log("Activate event in progress.");
  async function deleteOldCaches() {
      // List all caches by their names.
      const names = await caches.keys();
      await Promise.all(names.map(name => {
        if (name !== CACHE_NAME) {
          // If a cache's name is the current name, delete it.
          return caches.delete(name);
        }
      }));
    }

    event.waitUntil(deleteOldCaches());
});*/

self.addEventListener("install", event => {
  console.log("Install event in progress.");
  /*async function preCacheResources() {
      // Open the app's cache.
      const cache = await caches.open(CACHE_NAME);
      // Cache all static resources.
      cache.addAll(PRE_CACHED_RESOURCES);
    }

    event.waitUntil(preCacheResources());*/
  self.skipWaiting();
});

/*self.addEventListener("fetch", event => {
  console.log("Fetch event in progress.");
  async function returnCachedResource() {
      // Open the app's cache.
      const cache = await caches.open(CACHE_NAME);
      // Find the response that was pre-cached during the `install` event.
      const cachedResponse = await cache.match(event.request.url);

      if (cachedResponse) {
        // Return the resource.
        return cachedResponse;
      } else {
        // The resource wasn't found in the cache, so fetch it from the network.
        const fetchResponse = await fetch(event.request.url);
        // Put the response in cache.
        cache.put(event.request.url, fetchResponse.clone());
        // And return the response.
        return fetchResponse
      }
    }

    event.respondWith(returnCachedResource());
});*/
