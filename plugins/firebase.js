// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgE6jK8x6E9jWxNeX6mMxsr7jVuy9MNnM",
    authDomain: "fir-cy-9c553.firebaseapp.com",
    projectId: "fir-cy-9c553",
    storageBucket: "fir-cy-9c553.appspot.com",
    messagingSenderId: "71463040112",
    appId: "1:71463040112:web:1b3304fe9803fa9aa1b0b5"

    // apiKey: "AIzaSyCEgWrmKEUwvTVJwmxwZQ3YdVTYlhe8odw",
    // authDomain: "fir-cy-65da6.firebaseapp.com",
    // projectId: "fir-cy-65da6",
    // storageBucket: "fir-cy-65da6.appspot.com",
    // messagingSenderId: "996211122150",
    // appId: "1:996211122150:web:1ae6e9fb55ba2832398027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firestore database lưu trữ csdl

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };