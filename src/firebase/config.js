import { initializeApp } from "firebase/app";
//auth
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
//firestore
import { getFirestore, collection, addDoc, doc, getDoc, setDoc, query, where, getDocs, deleteDoc } from "firebase/firestore";
//storage
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASNr_zJ4zbil-SjU7OMwwMrkCw0LQqN0A",
  authDomain: "catafy-26ec0.firebaseapp.com",
  projectId: "catafy-26ec0",
  storageBucket: "catafy-26ec0.appspot.com",
  messagingSenderId: "803415703477",
  appId: "1:803415703477:web:92cce6cb444082ba0ca3fc",
  measurementId: "G-BKJFFBPM0V"
};

const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

//FIRESTORE
const db = getFirestore(app);

//STORAGE
const storage = getStorage(app)


//export
export {auth, googleProvider}
export {db}
export {storage}