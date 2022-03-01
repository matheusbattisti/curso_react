import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLvEGhcQo1QjbHP-0D7bRaKrFAaGQW_sg",
  authDomain: "miniblog-ref.firebaseapp.com",
  projectId: "miniblog-ref",
  storageBucket: "miniblog-ref.appspot.com",
  messagingSenderId: "411532945241",
  appId: "1:411532945241:web:3808bd6c6bf5b1fb774e48",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
