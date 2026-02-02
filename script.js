import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFX2Q7NuOeBIxWzloecYhicavuLjWhgsw",
  authDomain: "racetraxpro.firebaseapp.com",
  projectId: "racetraxpro",
  storageBucket: "racetraxpro.appspot.com", // VIGTIG rettelse her
  messagingSenderId: "1069340025313",
  appId: "1:1069340025313:web:1751f2ecad69f0a26bf2a0"
};

// initialiser Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function connect() {
  const codeInput = document.getElementById('sessionCodeInput');
  const outputEl = document.getElementById('output');

  const code = codeInput.value.trim();
  if (!code) {
    alert("Enter code");
    return;
  }

  outputEl.textContent = "Connecting to session " + code + "...";

  const sessionRef = doc(db, "raceSessions", code);

  onSnapshot(
    sessionRef,
    (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        outputEl.textContent = JSON.stringify(data, null, 2);
      } else {
        outputEl.textContent = "Session not found.";
      }
    },
    (error) => {
      console.error("Firestore listener error:", error);
      outputEl.textContent = "Error connecting to session.";
    }
  );
}

// gør funktionen tilgængelig for onclick="connect()"
window.connect = connect;
