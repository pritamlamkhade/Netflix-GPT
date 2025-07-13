// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZzX738I2Kwq_MpXn8w9eNcXrmr9GniI",
  authDomain: "netflixgpt-1fe73.firebaseapp.com",
  projectId: "netflixgpt-1fe73",
  storageBucket: "netflixgpt-1fe73.firebasestorage.app",
  messagingSenderId: "294966733651",
  appId: "1:294966733651:web:0d2e708a36f0311b300fa6",
  measurementId: "G-ZKR6932FQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);