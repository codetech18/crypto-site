import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCaSodrCVZ0LSVhBVgg1kW4DW_Vwg0ewlM",
    authDomain: "formlogin-1ba5e.firebaseapp.com",
    projectId: "formlogin-1ba5e",
    storageBucket: "formlogin-1ba5e.appspot.com",
    messagingSenderId: "426462914664",
    appId: "1:426462914664:web:c4ae93be9d87a9ac79f3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// const registerName = document.getElementById("nlabel").value;

document.getElementById("btn").addEventListener('click', function () {
    console.log("LETS START FROM HERE");

    const registerEmail = document.getElementById("eemail").value;
    const registerPassword = document.getElementById("lpassword").value;
    const registerName = document.getElementById("fname").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            // const user = userCredential.user;
            const user = auth.currentUser;

            // const database_ref = database.getReference();

            const user_data = {
                email: registerEmail,
                name: registerName,
                balance: 0
            }

            // database_ref.child('users/' + user.uid).set(user_data);
            set(ref(database, 'users/' + user.uid), user_data);

            window.location.assign("../bootsrap_portfolio/index-2.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });

        // window.location.assign("../bootsrap_portfolio/index-2.html");
})

document.getElementById("btn1").addEventListener('click', function () {
    console.log("LETS continue FROM HERE");
    const registerEmail = document.getElementById("email").value;
    const registerPassword = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, registerEmail, registerPassword) 
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.assign("../bootsrap_portfolio/index-2.html");
            console.log("it is working");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
})

// const signInButtons = document.getElementById("users-email").innerHTML=registerEmail;