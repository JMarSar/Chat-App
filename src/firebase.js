// import firebase from "firebase/app";
// import "firebase/auth"

// export const auth = firebase.initializeApp({
//   apiKey: "AIzaSyCcKkrzBm9OeiRBAFCIxVyBhsPNjGEu3hE",
//   authDomain: "fchat-2e840.firebaseapp.com",
//   projectId: "fchat-2e840",
//   storageBucket: "fchat-2e840.appspot.com",
//   messagingSenderId: "138741024235",
//   appId: "1:138741024235:web:22bcca380290a748e845ae"
// }).auth();

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCcKkrzBm9OeiRBAFCIxVyBhsPNjGEu3hE",
  authDomain: "fchat-2e840.firebaseapp.com",
  projectId: "fchat-2e840",
  storageBucket: "fchat-2e840.appspot.com",
  messagingSenderId: "138741024235",
  appId: "1:138741024235:web:22bcca380290a748e845ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;