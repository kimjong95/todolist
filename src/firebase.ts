// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1aQrbzjBghuo6YS1p5FRJzXw5YQ-I0cE",
  authDomain: "todolist-8a122.firebaseapp.com",
  projectId: "todolist-8a122",
  storageBucket: "todolist-8a122.appspot.com",
  messagingSenderId: "631047689031",
  appId: "1:631047689031:web:3ceba551c82a20234f3262",
  measurementId: "G-GX7YXGCYQP",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const database = getFirestore(firebase);

export { database };
