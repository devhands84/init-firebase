import React from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default function Home() {
    const config = {
        apiKey: "AIzaSyDVbiWxoJDEdRnmBFVTkmAPnjJRsUM6GoQ",
        authDomain: "testproject-c1e54.firebaseapp.com",
        projectId: "testproject-c1e54",
        storageBucket: "testproject-c1e54.appspot.com",
        messagingSenderId: "736991330123",
        appId: "1:736991330123:web:0fb4ed6afa7a3842c0f2ce",
    };
    const firebaseApp = initializeApp(config); //1차 정보 접근
    const database = getFirestore(firebaseApp); //정보가 올바르면 아래 파이어스토어 접근

    const q = query(collection(database, "votes"));
    getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });

    return <div> hello</div>;
}
