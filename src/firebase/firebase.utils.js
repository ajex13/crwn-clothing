import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDIjnZk5aZ8q8a02b0u3LQocgAG-hYC1Ys",
  authDomain: "crwn-db-465f7.firebaseapp.com",
  databaseURL: "https://crwn-db-465f7.firebaseio.com",
  projectId: "crwn-db-465f7",
  storageBucket: "",
  messagingSenderId: "371848441114",
  appId: "1:371848441114:web:7c9e2e59e748481e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
