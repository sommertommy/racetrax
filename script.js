let app, db;

const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_APP.firebaseapp.com",
    projectId: "YOUR_APP",
    storageBucket: "YOUR_APP.appspot.com",
    messagingSenderId: "123",
    appId: "1:123:web:abc"
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
