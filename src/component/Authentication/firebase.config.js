// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBBiu6BxDGZMi2zK8oTjftJNhScQFbtU",
  authDomain: "subsportfolio.firebaseapp.com",
  projectId: "subsportfolio",
  storageBucket: "subsportfolio.firebasestorage.app",
  messagingSenderId: "1012176990299",
  appId: "1:1012176990299:web:966bda58445cdfba08cf7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig