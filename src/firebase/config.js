import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQc_IWT0UHpb3Ga2BpXN4uqacM_LFPzgY",
    authDomain: "mymoney-df87e.firebaseapp.com",
    projectId: "mymoney-df87e",
    storageBucket: "mymoney-df87e.appspot.com",
    messagingSenderId: "180447325632",
    appId: "1:180447325632:web:6638a31328fcdec272ec25",
    measurementId: "G-RVZS3ZBV1S",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
