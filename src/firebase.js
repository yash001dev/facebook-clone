import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDBZxlt9lIVy__gmX8vUgXaqzeu5kN6UE",
    authDomain: "facebook-clone-f47b5.firebaseapp.com",
    databaseURL: "https://facebook-clone-f47b5.firebaseio.com",
    projectId: "facebook-clone-f47b5",
    storageBucket: "facebook-clone-f47b5.appspot.com",
    messagingSenderId: "282905013732",
    appId: "1:282905013732:web:c82a0b34ccfc2fa4fd2bf1"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;