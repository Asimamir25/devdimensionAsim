// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG1LtgkzPAw-tBuW5Rtsii0acqlrKkHEw",
  authDomain: "devdimension-e212f.firebaseapp.com",
  projectId: "devdimension-e212f",
  storageBucket: "devdimension-e212f.firebasestorage.app",
  messagingSenderId: "837947581840",
  appId: "1:837947581840:web:88124a9a3691daf079ff15",
  measurementId: "G-SP8NW86PFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Set persistence to keep user logged in on page refresh
setPersistence(auth, browserLocalPersistence);

export { analytics };
export default app;

