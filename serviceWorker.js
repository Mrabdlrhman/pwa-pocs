const staticCourse = "course-site";
const assets = [
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./images/c1.jpg"

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCourse).then(cache => {
      cache.addAll(assets);
    })
  );
});



self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
