import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  user: Observable<firebase.User>;

  email: string;
  password: string;

  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
    this.router = router;
  }

  login() {
    this.loginService(this.email, this.password);
    this.email = this.password = '';
  }

  loginService(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['/admin']);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  ngOnInit() {
  }

}
