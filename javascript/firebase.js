  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqpmh6HbZKNxr_Or7LocykbIDydTs2CVA",
    authDomain: "quizmaster-3a0b4.firebaseapp.com",
    projectId: "quizmaster-3a0b4",
    storageBucket: "quizmaster-3a0b4.appspot.com",
    messagingSenderId: "678939403995",
    appId: "1:678939403995:web:aa30770ff1d54d0f9f4efe",
    measurementId: "G-KNB8QNPZ3C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const storage = getStorage(app);
