// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyZNX6BgjlpsA4imd2vuGKHLVYqHfRoWA",
  authDomain: "hackhathon-47cc3.firebaseapp.com",
  projectId: "hackhathon-47cc3",
  storageBucket: "hackhathon-47cc3.appspot.com",
  messagingSenderId: "1054729180798",
  appId: "1:1054729180798:web:401d8b381ac378818fea2f",
  measurementId: "G-8DGS9C2HPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const btn = document.getElementById("btn");
btn.addEventListener("click", async function () {
  // Retrieve form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const mobile = document.getElementById("mobile").value;
  const cnic = document.getElementById("cnic").value;
  const userType = document.getElementById("user-type").value;
  const genderElement = document.querySelector('input[name="gender"]:checked');
  const gender = genderElement ? genderElement.value : "";

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const formData = {
      uid: user.uid,
      userType,
      firstName,
      lastName,
      email,
      mobile,
      cnic,
      gender,
    };

    // Add a new document with a generated ID
    const docRef = await addDoc(collection(db, "student"), formData);
    console.log("Document written with ID: ", docRef.id);
    alert("Registration successful!");
    window.location.href = "signIn.html";
    document.getElementById("registration-form").reset();
  } catch (e) {
    console.error("Error during registration: ", e);
    alert("Registration failed. Please try again.");
  }
});
