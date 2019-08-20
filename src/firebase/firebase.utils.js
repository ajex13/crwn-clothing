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

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creacting user',error.message);
      }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
