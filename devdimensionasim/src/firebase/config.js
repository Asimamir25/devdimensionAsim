import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG1LtgkzPAw-tBuW5Rtsii0acqlrKkHEw",
  authDomain: "devdimension-e212f.firebaseapp.com",
  projectId: "devdimension-e212f",
  storageBucket: "devdimension-e212f.firebasestorage.app",
  messagingSenderId: "837947581840",
  appId: "1:837947581840:web:88124a9a3691daf079ff15",
  measurementId: "G-SP8NW86PFH"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

export { analytics };
export default app;

