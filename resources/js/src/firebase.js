import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyD5RCH49uZU5UVALHVzKX6T85a9ToRhPFk",
    authDomain: "soft-dental.firebaseapp.com",
    databaseURL: "https://soft-dental-default-rtdb.firebaseio.com",
    projectId: "soft-dental",
    storageBucket: "soft-dental.appspot.com",
    messagingSenderId: "103734427165",
    appId: "1:103734427165:web:530bdfa7ae77acd38750f4",
    measurementId: "G-6ZPYX2LDJ5",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const messaging = firebase.messaging();

export { db, auth, firebase, storage, messaging };
