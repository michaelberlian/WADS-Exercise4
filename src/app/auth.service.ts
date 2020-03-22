import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  doLogin(value){
    return new Promise<any> ((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res=>{
        resolve(res);
      }, err => reject(err))
    })
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  getUserState() {
    return this.afAuth.authState;
  }

  logout() {
    // localStorage.removeItem('SessionUser');
    // localStorage.clear();
    return this.afAuth.auth.signOut();
  }
}
