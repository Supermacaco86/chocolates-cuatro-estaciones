// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-6BTcqcheRBYjcrvarCwIvM0VAtqtds",
  authDomain: "chocolates-cuatro-estaci-891fd.firebaseapp.com",
  databaseURL: "https://chocolates-cuatro-estaci-891fd-default-rtdb.firebaseio.com",
  projectId: "chocolates-cuatro-estaci-891fd",
  storageBucket: "chocolates-cuatro-estaci-891fd.appspot.com",
  messagingSenderId: "787964063972",
  appId: "1:787964063972:web:49bc51124e316668cefcf1",
  measurementId: "G-TJWNP6LYFE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)