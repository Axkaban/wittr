self.addEventListener('fetch', function(event) {
  console.log('yo', event.request);
});