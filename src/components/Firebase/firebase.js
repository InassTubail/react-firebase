import app from 'firebase';
import 'firebase/auth';//package from Firebase responsible for all the authentication
// import env2 from 'env2';

// env2('../../../config.env'); 

const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyB9sq-ouZ98oCuXAygVxvyGrqic1HfnjEM",
  authDomain: "fresh-span-236620.firebaseapp.com",
  databaseURL: "https://fresh-span-236620.firebaseio.com",
  projectId: "fresh-span-236620",
  storageBucket: "fresh-span-236620.appspot.com",
  messagingSenderId: "679877182532",
  appId: "1:679877182532:web:be2d0cb16d05066e"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  /*Let’s define all the authentication functions as class methods */
  /* Auth API */
  doCreateUserWithEmailAndPassword = (email, password) =>
   this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
   
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email =>   this.auth.sendPasswordResetEmail(email);

   doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
export default Firebase;


