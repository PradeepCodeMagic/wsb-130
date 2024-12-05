// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAo9vCX5beKDPNgQzXb6IAFUHfjCiMGqBo",
  authDomain: "wsb-130.firebaseapp.com",
  projectId: "wsb-130",
  storageBucket: "wsb-130.firebasestorage.app",
  messagingSenderId: "104779849911",
  appId: "1:104779849911:web:f30016704b68ddd91ead32",
  measurementId: "G-9M967J09PP"
};


 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);