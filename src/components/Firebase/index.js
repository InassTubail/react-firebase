
import Firebase from './firebase';
import FirebaseContext, { withFirebase } from './context';

export default Firebase;
export { FirebaseContext, withFirebase  }; //used to provide a Firebase instance to your entire application 

// in this file we exports all necessary functionalities (Firebase class, Firebase context for Consumer and Provider components):

