// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv4krov477Ua9SUqmqZCs2qNeczm5-Xjw",
  authDomain: "pos-machine-5a7f1.firebaseapp.com",
  projectId: "pos-machine-5a7f1",
  storageBucket: "pos-machine-5a7f1.appspot.com",
  messagingSenderId: "796664348235",
  appId: "1:796664348235:web:d36984374ac27096e7d7ce",
  measurementId: "G-C2BHFK1VHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);