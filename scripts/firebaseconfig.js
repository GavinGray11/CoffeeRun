(function (window) {
  'use strict';
  var App = window.App || {};
 

  var FireBaseConfig = {
    apiKey: config.FIREBASE_apiKey,
    authDomain: config.FIREBASE_authDomain,
    projectId: config.FIREBASE_projectId,
    storageBucket: config.FIREBASE_storageBucket,
    messagingSenderId: config.FIREBASE_messagingSenderId,
    appId: config.FIREBASE_appId
  };
  App.FirebaseConfig = FireBaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;
})(window);