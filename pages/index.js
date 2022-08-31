import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { fireStore } from "../firebase/clientApp";

export default function Home() {
    //const [user, loading, error] = useAuthState(Auth());
    //console.log("loading...", loading, "|", " current user: ", user);
    const [votes, votesLoading, votesError] = useCollection(
        fireStore.collection("votes"),
        {}
    );
    if (!votesLoading && votes) {
        votes.map((doc) => console.log(doc.data()));
    }
    return <div> hello</div>;
}
