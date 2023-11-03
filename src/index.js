import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Start: add firebase configuration 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt4_pgQ7r1CRmKq936voCpqaNS3bD9p18",
  authDomain: "my-react-blog-fef66.firebaseapp.com",
  projectId: "my-react-blog-fef66",
  storageBucket: "my-react-blog-fef66.appspot.com",
  messagingSenderId: "232221042701",
  appId: "1:232221042701:web:90a0c0b56e1b6118e94d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// end: of the firebase configuration.

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
