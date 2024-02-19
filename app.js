const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");

});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
document.getElementById('signUpBtn').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('signInBtn').addEventListener('click', function() {
  window.location.href = 'index.html';
});

// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMEfe_OmQivpjdmohR0ZvVmnmFpiZtfxs",
  authDomain: "hackethon-42b2f.firebaseapp.com",
  databaseURL: "https://hackethon-42b2f-default-rtdb.firebaseio.com",
  projectId: "hackethon-42b2f",
  storageBucket: "hackethon-42b2f.appspot.com",
  messagingSenderId: "317061568878",
  appId: "1:317061568878:web:b33772fe722ed0f97f497f",
  measurementId: "G-M1NMCFF4EG"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed Up")
          console.log(result)
          // ...
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
          
      });
}

// Sign In function
const signinbtn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed In")
          console.log(result)
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}