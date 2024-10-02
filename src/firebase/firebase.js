import { initializeApp } from "firebase/app";
 import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIZizUXfnBRil--z2SGESN0Li_ypdxzPc",
  authDomain: "smart-city-6edf2.firebaseapp.com",
  projectId: "smart-city-6edf2",
  storageBucket: "smart-city-6edf2.appspot.com",
  messagingSenderId: "513308390357",
  appId: "1:513308390357:web:b045146c903100327b835c",
  measurementId: "G-QG3LJZB4JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)