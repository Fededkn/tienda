import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdJRluW_xuntAjbkUDTKsmOStZUpn6S7M",
  authDomain: "tienda-tech-c9d7b.firebaseapp.com",
  projectId: "tienda-tech-c9d7b",
  storageBucket: "tienda-tech-c9d7b.appspot.com",
  messagingSenderId: "454466588741",
  appId: "1:454466588741:web:f27bba18a5cd34e5ed532c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
