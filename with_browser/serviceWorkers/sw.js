self.addEventListener('fetch', function(event) {
  console.log(event.request);
  console.log(event.request.headers);
  console.log('!!now fetch!!');
});
