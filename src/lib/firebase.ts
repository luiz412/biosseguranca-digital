import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzvkcVqzhiYkULrqdZteTSGNcS335LnxI",
  authDomain: "biosseguranca-digital.firebaseapp.com",
  projectId: "biosseguranca-digital",
  storageBucket: "biosseguranca-digital.firebasestorage.app",
   messagingSenderId: "990631878576",
  appId: "1:990631878576:web:29781702413f1c42dcc075",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);