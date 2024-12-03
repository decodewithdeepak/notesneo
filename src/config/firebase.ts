import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo2aOPeiSwstoEhnbocTy4vNu2l0F53-w",
    authDomain: "notesneo-dm.firebaseapp.com",
    projectId: "notesneo-dm",
    storageBucket: "notesneo-dm.firebasestorage.app",
    messagingSenderId: "104870003278",
    appId: "1:104870003278:web:46b39c04bc6c212762391f",
    measurementId: "G-PJDX6YCCMW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);