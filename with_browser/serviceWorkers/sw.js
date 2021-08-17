self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
  );
});

// function fetchWithParamAddedToRequestBody(request) {
//   console.log("!!!!!")
//   fetch(request)
// }

