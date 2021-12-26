import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCrBjMK2jkXQLHRLzpRSKYCkqqWWZikAPE",
  authDomain: "letmeask-17364.firebaseapp.com",
  databaseURL: "https://letmeask-17364-default-rtdb.firebaseio.com",
  projectId: "letmeask-17364",
  storageBucket: "letmeask-17364.appspot.com",
  messagingSenderId: "153820529715",
  appId: "1:153820529715:web:10a0f35015724accfe0f46"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };


