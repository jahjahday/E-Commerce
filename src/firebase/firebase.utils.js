import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNiWOGOkz41Rgtq_z_LG4Zs0Y7xPxtfuw",
  authDomain: "e--commerce-9da15.firebaseapp.com",
  databaseURL: "https://e--commerce-9da15.firebaseio.com",
  projectId: "e--commerce-9da15",
  storageBucket: "e--commerce-9da15.appspot.com",
  messagingSenderId: "567487777752",
  appId: "1:567487777752:web:5503a5717e7474e0bd40ad",
  measurementId: "G-4H3222PF95",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc("users/${userAuth.uid}");

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
