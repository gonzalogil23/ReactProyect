import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJHP2bQIB9xN7U9TNjSGT1mPKdevV0L-w",
  authDomain: "wines-proyect.firebaseapp.com",
  projectId: "wines-proyect",
  storageBucket: "wines-proyect.appspot.com",
  messagingSenderId: "1036936959158",
  appId: "1:1036936959158:web:3c4eb32b0de638504d0217",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dataBase = () => {
  return firebase.firestore(firebaseApp);
};
