import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvCv1pycTTsTbg68HOmTVU__SOjbsI9nQ",
  authDomain: "testdatabase-c2422.firebaseapp.com",
  projectId: "testdatabase-c2422",
  storageBucket: "testdatabase-c2422.appspot.com",
  messagingSenderId: "532182286540",
  appId: "1:532182286540:web:5011583475cc527e324269",
  measurementId: "G-B89CC6WPVJ",
};

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db,auth};
