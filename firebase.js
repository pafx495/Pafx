<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore, doc, setDoc } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAsEnTrE0EvR0ZwbS_YpF3a4Ph3S3VHZQ",
  authDomain: "paf-x-56f2d.firebaseapp.com",
  projectId: "paf-x-56f2d",
  storageBucket: "paf-x-56f2d.firebasestorage.app",
  messagingSenderId: "1023059500240",
  appId: "1:1023059500240:web:9d3a646b52f510cbd512d5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* Exposer globalement */
window.auth = auth;
window.db = db;
window.sendSignInLinkToEmail = sendSignInLinkToEmail;
window.isSignInWithEmailLink = isSignInWithEmailLink;
window.signInWithEmailLink = signInWithEmailLink;
window.setDoc = setDoc;
window.doc = doc;
</script>
