import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC7ZhO2V_HssAbLl4r4IOFbLt_sV1xS6Yk",
  authDomain: "mini-blog-c4c19.firebaseapp.com",
  projectId: "mini-blog-c4c19",
  storageBucket: "mini-blog-c4c19.appspot.com",
  messagingSenderId: "533957839768",
  appId: "1:533957839768:web:3c1b62b6567c9aa4beb9ed",
  measurementId: "G-37XJQMYFHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db};