import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {

  user: Observable<firebase.User>;


  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
    this.router = router;
  }

  loginService(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/admin']);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  checkLogin(){
    //for some reason 'this' instance is lost... so declare it before doing things
    var _router = this.router;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        _router.navigate(['/admin']);

      } else {
        _router.navigate(['/signin']);
      }
    });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
