
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBmNC6_Xxch5kq5bChSnFkirT_cpSLfDLY",
  authDomain: "auth-asteroid.firebaseapp.com",
  projectId: "auth-asteroid",
  storageBucket: "auth-asteroid.appspot.com",
  messagingSenderId: "1031146454666",
  appId: "1:1031146454666:web:6fb1ed0bfd867d0637f773"
};

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)
const auth = getAuth(app)
export { app, auth }

