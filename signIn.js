import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyZNX6BgjlpsA4imd2vuGKHLVYqHfRoWA",
  authDomain: "hackhathon-47cc3.firebaseapp.com",
  projectId: "hackhathon-47cc3",
  storageBucket: "hackhathon-47cc3.appspot.com",
  messagingSenderId: "1054729180798",
  appId: "1:1054729180798:web:401d8b381ac378818fea2f",
  measurementId: "G-8DGS9C2HPF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn2 = document.getElementById("btn");
btn2.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const userType = document.querySelector('input[name="select"]:checked').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Sign In successful");

      // Redirect based on user type
      if (userType === "admin") {
        window.location.href = `resultForm.html?uid=${user.uid}`;
      } else if (userType === "student") {
        window.location.href = "detail.html";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in: ", errorCode, errorMessage);
      alert("Sign In failed. Please check your credentials.");
    });
});
