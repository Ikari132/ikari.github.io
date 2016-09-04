var endpoint;
var key;
var authSecret;

navigator.serviceWorker.register('service-worker.js')
.then(function(registration) {

  return registration.pushManager.getSubscription()
  .then(function(subscription) {

    if (subscription) {
      return subscription;
    }

    return registration.pushManager.subscribe({ userVisibleOnly: true });
  });
}).then(function(subscription) {
 
  var rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
  key = rawKey ?
        btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) :
        '';
  var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
  authSecret = rawAuthSecret ?
               btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) :
               '';

  endpoint = subscription.endpoint;
 
  fetch('./register', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      endpoint: subscription.endpoint,
      key: key,
      authSecret: authSecret,
    }),
  });
});

document.getElementById('doIt').onclick = function() {
  var payload = "Test for UT";
  var delay = document.getElementById('notification-delay').value;

  fetch('/sendNotification', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      endpoint: endpoint,
      key: key,
      authSecret: authSecret,
      payload: payload,
      delay: delay
    }),
  });
};