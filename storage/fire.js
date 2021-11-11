// Import the functions you need from the SDKs you need
import { getAuth } from '@firebase/auth';
import{initializeApp} from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-W1-Naqw0gJoRL3RhY0aQAgXFTPaFrzA",
  authDomain: "projectmanagement-e3d9f.firebaseapp.com",
  projectId: "projectmanagement-e3d9f",
  storageBucket: "projectmanagement-e3d9f.appspot.com",
  messagingSenderId: "949843884454",
  appId: "1:949843884454:web:6968ff917dac2a938c7767"
};

const app =   initializeApp(firebaseConfig)
const auth = getAuth();
export {auth};
