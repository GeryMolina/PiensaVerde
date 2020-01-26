import firebase from 'firebase-app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



const config = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
  };


class Firebase {
    constructor(){
      firebase.initializeApp(config);
      this.auth =firebase.auth();
      this.db= firebase.firestore();
  
    }
    //Registro de usuario
    async signIn(email, password){
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error=>{
         console.log(error);
      })

      return user
    }
    //Ingreso usuario
    async login(email, password){
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error=>{
        console.log(error);
     })

     return user
    }
    //cerrar sesion
    async logOut(){
      const logout = await firebase.auth().signOut()
      .catch(error =>{
        console.log(error)
      })
      return logout
    }

  async getUserState(){
    return new Promise(resolve=>{
      this.auth.onAuthStateChanged(resolve);
    })
  }
} 

export default new Firebase();