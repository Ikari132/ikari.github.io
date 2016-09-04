// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Keep the service worker alive until the notification is created.

  var payload = event.data ? event.data.text() : 'Test for UT';

  event.waitUntil(
    self.registration.showNotification('Test', {
      body: payload,
    })
  );
});
