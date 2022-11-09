import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './App/reportWebVitals';
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOUwtypJq0k0gbEU1i_pNtngptz3BBFo0",
  authDomain: "fir-auth-methods-4a97b.firebaseapp.com",
  projectId: "fir-auth-methods-4a97b",
  storageBucket: "fir-auth-methods-4a97b.appspot.com",
  messagingSenderId: "1044499264230",
  appId: "1:1044499264230:web:320e68bc035dd751f40127",
  measurementId: "G-HG21PP1RND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
