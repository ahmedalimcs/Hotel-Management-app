// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCrHaiANl2wfZkRhq_1dPJzdbLnp70X02M",
  authDomain: "hotel-management-7a3ad.firebaseapp.com",
  projectId: "hotel-management-7a3ad",
  storageBucket: "hotel-management-7a3ad.appspot.com",
  messagingSenderId: "1023860210866",
  appId: "1:1023860210866:web:134c97e33bbfb7c0341dab",
  measurementId: "G-GMFKWCXJWM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider();

export {db,auth,provider};

