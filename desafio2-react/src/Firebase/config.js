
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_C52ONZ-FwoYXQkP2snpikZE0uyvFT1U",
  authDomain: "laslocass-reactjs.firebaseapp.com",
  projectId: "laslocass-reactjs",
  storageBucket: "laslocass-reactjs.appspot.com",
  messagingSenderId: "446842881966",
  appId: "1:446842881966:web:ee7ec07b5ecf9b53086a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
    
}