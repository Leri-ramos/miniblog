
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBc8_13T95E4bycQFCrsQXWoq18E9N_AA",
  authDomain: "miniblog-b80ae.firebaseapp.com",
  projectId: "miniblog-b80ae",
  storageBucket: "miniblog-b80ae.appspot.com",
  messagingSenderId: "985954230794",
  appId: "1:985954230794:web:d62b27d7edb5890521f5f3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};