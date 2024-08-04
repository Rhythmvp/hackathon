// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9Jc8hQur_TMeWH0azJS1E6CbuQ7cI9Q",
  authDomain: "sosnetwork-report-form.firebaseapp.com",
  databaseURL: "https://sosnetwork-report-form-default-rtdb.firebaseio.com",
  projectId: "sosnetwork-report-form",
  storageBucket: "sosnetwork-report-form.appspot.com",
  messagingSenderId: "452716873525",
  appId: "1:452716873525:web:43a9818a813335d9e76e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//reference your datanbase
var database = firebase.database().ref("data-form");
document.getElementById("data-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
}

var name = getElementByVal("box");
var disaster = getElementByVal("box");
var city = getElementByVal("box");
var state = getElementByVal("box");

saveMessages(name,disaster,city,state);

const saveMessages = (name,disaster,city,state) =>{
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    disaster: disaster,
    city: city,
    state: state,
  });
};

const getElementByVal = (id) => {
  return document.getElementById(id).value;
};

