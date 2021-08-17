import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqMKDmt-zZ66AJlYw2YCOYFoQB2r2_a8I",
  authDomain: "wines-47367.firebaseapp.com",
  projectId: "wines-47367",
  storageBucket: "wines-47367.appspot.com",
  messagingSenderId: "705319920670",
  appId: "1:705319920670:web:f0fe6971ac3d3ad17ffa0f"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dataBase = () => {
  return firebase.firestore(firebaseApp);
};
