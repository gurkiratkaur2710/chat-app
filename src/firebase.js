// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjCPbqjxBCqUJOfhDu8xT46DlNXMAxLNA",
  authDomain: "web-app-49355.firebaseapp.com",
  projectId: "web-app-49355",
  storageBucket: "web-app-49355.appspot.com",
  messagingSenderId: "335521763278",
  appId: "1:335521763278:web:ec0e3c74584ef5a36da59f",
  measurementId: "G-52Z3761VM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
// const analytics = getAnalytics(app);