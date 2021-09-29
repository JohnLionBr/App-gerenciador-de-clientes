import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.aps.length){
    firebase.initializeApp({
        apiKey: process.env.,
        authDomain: process.env.,
        projectId: process.env.,
    })
}