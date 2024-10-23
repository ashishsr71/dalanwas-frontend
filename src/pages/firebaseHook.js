import React from 'react';
import firebase from './firebase'; // Import your firebase.js file

function firebaseHook() {
  // ... your component logic

  // Use Firebase services
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  return {db,auth,storage}
  // ...
};



export default firebaseHook ;
