// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs7oy9GUeq5XhgmQGifE5oRA1xHHbmTQY",
    authDomain: "photographer-client-side.firebaseapp.com",
    projectId: "photographer-client-side",
    storageBucket: "photographer-client-side.appspot.com",
    messagingSenderId: "761116061805",
    appId: "1:761116061805:web:38c81ec8973c8cdd914f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;