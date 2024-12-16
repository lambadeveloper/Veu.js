import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2gNIirlbWBL_7kNYCsey-QDxy1HFLdM4",
  authDomain: "veujs-16fc5.firebaseapp.com",
  projectId: "veujs-16fc5",
  storageBucket: "veujs-16fc5.firebasestorage.app",
  messagingSenderId: "1026484932557",
  appId: "1:1026484932557:web:54ae6559749ccb9ae6be84",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
