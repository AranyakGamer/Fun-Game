// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK58nt02jgsRXNkZfSQhwHovQmYiNTEJM",
  authDomain: "hackathon-46c1d.firebaseapp.com",
  databaseURL: "https://hackathon-46c1d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackathon-46c1d",
  storageBucket: "hackathon-46c1d.appspot.com",
  messagingSenderId: "209261363901",
  appId: "1:209261363901:web:73e2ab0ed0934ff679edd4",
  measurementId: "G-FN4NNDW1Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const database = getDatabase();  
