import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app);

const firebaseAuth = app.auth();
firebaseAuth.languageCode = "vi";

firebaseAuth.onAuthStateChanged((fUser) => {
  if (fUser) {
    console.log(fUser);
  } else {
    console.log(fUser);
  }
});

export { firebaseAuth, app as firebaseApp, firebaseConfig };

export default firebase;
