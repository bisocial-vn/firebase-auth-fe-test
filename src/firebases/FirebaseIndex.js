import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app);

const firebaseAuth = app.auth();
if (process.env.REACT_APP_FIREBASE_LOCAL_EMULATOR) {
  firebaseAuth.useEmulator("http://localhost:9099");
}
firebaseAuth.languageCode = "vi";
firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.NONE); // Do not store any firebase auth state

firebaseAuth.onAuthStateChanged((fUser) => {
  if (fUser) {
    console.log(fUser);
  }
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope("profile");
googleAuthProvider.addScope("email");

export { firebaseAuth, app as firebaseApp, firebaseConfig, googleAuthProvider };

export default firebase;
