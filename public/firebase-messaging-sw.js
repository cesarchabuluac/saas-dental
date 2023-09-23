// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyD5RCH49uZU5UVALHVzKX6T85a9ToRhPFk",
    authDomain: "soft-dental.firebaseapp.com",
    databaseURL: "https://soft-dental-default-rtdb.firebaseio.com",
    projectId: "soft-dental",
    storageBucket: "soft-dental.appspot.com",
    messagingSenderId: "103734427165",
    appId: "1:103734427165:web:530bdfa7ae77acd38750f4",
    measurementId: "G-6ZPYX2LDJ5",
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});