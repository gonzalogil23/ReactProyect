import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqMKDmt-zZ66AJlYw2YCOYFoQB2r2_a8I",
  authDomain: "wines-47367.firebaseapp.com",
  projectId: "wines-47367",
  storageBucket: "wines-47367.appspot.com",
  messagingSenderId: "705319920670",
  appId: "1:705319920670:web:f0fe6971ac3d3ad17ffa0f",
};

// Firestore alternativo por si me paso el limite de llamadas diarias
const firebaseConfig2 = {
  apiKey: "AIzaSyDJHP2bQIB9xN7U9TNjSGT1mPKdevV0L-w",
  authDomain: "wines-proyect.firebaseapp.com",
  projectId: "wines-proyect",
  storageBucket: "wines-proyect.appspot.com",
  messagingSenderId: "1036936959158",
  appId: "1:1036936959158:web:3c4eb32b0de638504d0217",
};

let firebaseApp;
try {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.error("firebase", e);
  if (e.message === "Quota exceeded.") {
    firebaseApp = firebase.initializeApp(firebaseConfig2);
  }
}

// Initialize Firebase
export const dataBase = () => {
  return firebase.firestore(firebaseApp);
};
