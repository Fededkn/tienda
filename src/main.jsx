import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdJRluW_xuntAjbkUDTKsmOStZUpn6S7M",
  authDomain: "tienda-tech-c9d7b.firebaseapp.com",
  projectId: "tienda-tech-c9d7b",
  storageBucket: "tienda-tech-c9d7b.appspot.com",
  messagingSenderId: "454466588741",
  appId: "1:454466588741:web:f27bba18a5cd34e5ed532c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
