let app, db;

const firebaseConfig = {
  apiKey: "AIzaSyDFX2Q7NuOeBIxWzloecYhicavuLjWhgsw",
  authDomain: "racetraxpro.firebaseapp.com",
  projectId: "racetraxpro",
  storageBucket: "racetraxpro.firebasestorage.app",
  messagingSenderId: "1069340025313",
  appId: "1:1069340025313:web:1751f2ecad69f0a26bf2a0"
};

function connect(){
    const code = document.getElementById('sessionCodeInput').value.trim();
    if(!code){ alert("Enter code"); return;}
    if(!app){
        app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    }
    db.collection("raceSessions").doc(code)
      .onSnapshot(doc=>{
        if(doc.exists){
            document.getElementById("output").textContent = JSON.stringify(doc.data(), null, 2);
        } else {
            document.getElementById("output").textContent = "Session not found";
        }
      });
}
