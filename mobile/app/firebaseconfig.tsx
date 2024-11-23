// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// @ts-ignore 
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs_NB5Z1wvmB49cHdK06LDWMaK-cpXvWc",
  authDomain: "skilllevelling.firebaseapp.com",
  projectId: "skilllevelling",
  storageBucket: "skilllevelling.appspot.com",
  messagingSenderId: "400384393916",
  appId: "1:400384393916:web:e2aeb3674254f8a04346b9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP); 
