// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNyq9hsShmKxrHSLr7ptIEYEJqdSkLnZY",
  authDomain: "children-s-bedtime-story-78345.firebaseapp.com",
  projectId: "children-s-bedtime-story-78345",
  storageBucket: "children-s-bedtime-story-78345.appspot.com",
  messagingSenderId: "650689700304",
  appId: "1:650689700304:web:e74811c02d3cbc5a29d9d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const express = require('express');
// const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});