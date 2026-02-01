alert("🔥 app.js is running");

// 🔥 PASTE YOUR REAL FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyCNvc-KTRnSrQfU0lIkK9I-t4qSdx1cG4s",
  authDomain: "cookiecuttervault.firebaseapp.com",
  projectId: "cookiecuttervault",
  storageBucket: "cookiecuttervault.firebasestorage.app",
  messagingSenderId: "900114441261",
  appId: "1:900114441261:web:fd4f37af79e928933344a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth
const auth = firebase.auth();

// Elements
const form = document.getElementById("loginForm");
const errorEl = document.getElementById("error");

// Login handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("✅ Login successful!");
      // Next step will redirect to dashboard
    })
    .catch((error) => {
      errorEl.textContent = error.message;
    });
});
