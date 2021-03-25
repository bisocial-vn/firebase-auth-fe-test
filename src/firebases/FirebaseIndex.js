import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const app = firebase.initializeApp({});
firebase.analytics(app);

const firebaseAuth = firebase.auth();
firebaseAuth.languageCode("vi");

export { firebaseAuth };

export default firebase;
