import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZTaCa1PMsIF1v2Wa93vz2UZbBxxXdJMM",
  authDomain: "react-ecommerce-6e0e7.firebaseapp.com",
  projectId: "react-ecommerce-6e0e7",
  storageBucket: "react-ecommerce-6e0e7.appspot.com",
  messagingSenderId: "846847644155",
  appId: "1:846847644155:web:2a715e0a570116ae807b5e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
