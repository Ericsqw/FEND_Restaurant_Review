if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .then(function() {
  	console.log('Registration worked!');
  })
  .catch(function(err) {
    console.error(err);
  });
}