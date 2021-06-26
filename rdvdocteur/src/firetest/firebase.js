import app from 'firebase/app';
import React, { Component } from 'react'
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDdP1sD6WcYvmeQYngR2_hIIu3mH3Oz-wo",
  authDomain: "projetdocteur-c667f.firebaseapp.com",
  databaseURL: "https://projetdocteur-c667f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projetdocteur-c667f",
  storageBucket: "projetdocteur-c667f.appspot.com",
  messagingSenderId: "980411197746", 
  appId: "1:980411197746:web:20d867d13c741a41a1cf2b",
  measurementId: "G-5RXCZ1LPD7"
};

class firebase {
  constructor(){
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
  }
  //inscrption
  signupuser = (nom, email, password) =>
  this.auth.createUserWithEmailAndPassword(nom, email, password);

  //connexion
  loginuser = (email, password)=>
  this.auth.signInWithEmailAndPassword(email, password);
  
  //deconnexion
  signoutuser = () => this.auth.signOut()
}
export default firebase;