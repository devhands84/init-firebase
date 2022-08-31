import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
//import { firebase } from "../firebase/clientApp";
function SignInScreen() {
    const config = {
        apiKey: "AIzaSyDVbiWxoJDEdRnmBFVTkmAPnjJRsUM6GoQ",
        authDomain: "testproject-c1e54.firebaseapp.com",
        projectId: "testproject-c1e54",
        storageBucket: "testproject-c1e54.appspot.com",
        messagingSenderId: "736991330123",
        appId: "1:736991330123:web:0fb4ed6afa7a3842c0f2ce",
    };

    initializeApp(config);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    return (
        <div
            style={{
                maxWidth: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>Login</h1>
            <p>Please sign-in:</p>
            <button
                onClick={() => {
                    signInWithPopup(auth, provider)
                        .then((result) => {
                            const credential =
                                GoogleAuthProvider.credentialFromResult(result);
                            const token = credential.accessToken;
                            // The signed-in user info.
                            const user = result.user;
                            console.log(user);
                            // ...
                        })
                        .catch((error) => {
                            // Handle Errors here.
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorMessage);
                        });
                }}
            >
                Sign In
            </button>
        </div>
    );
}

export default SignInScreen;
