// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyR7Wt3wLyLVqnxwql5jmAcuIUx194hTg",
    authDomain: "ailearn-e81ce.firebaseapp.com",
    projectId: "ailearn-e81ce",
    storageBucket: "ailearn-e81ce.appspot.com",
    messagingSenderId: "798535166022",
    appId: "1:798535166022:web:0019a06476faafff7fc247",
    measurementId: "G-NBRX5S9RZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Function to set up reCAPTCHA for phone authentication
const setUpRecaptcha = (number) => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
            console.log("reCAPTCHA verified:", response);
        }
    });
    return signInWithPhoneNumber(auth, number, window.recaptchaVerifier);
};

export { auth, googleProvider, setUpRecaptcha };
