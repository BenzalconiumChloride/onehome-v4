// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZEQoNTNiMwCfSOcbWNik_JJz9iyM2OwI",
  authDomain: "onehome-5e9a8.firebaseapp.com",
  projectId: "onehome-5e9a8",
  storageBucket: "onehome-5e9a8.firebasestorage.app",
  messagingSenderId: "373780492663",
  appId: "1:373780492663:web:b01467a2d99564789db172",
  measurementId: "G-GLXVSX6711",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
