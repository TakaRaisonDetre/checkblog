import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

 error: any;
 constructor(public af:AngularFire, private router: Router) {
 this.af.auth.subscribe(auth=>{
 if(auth){
   this.router.navigateByUrl('/userhome');
 }
 });
 }

 loginFb() {
     this.af.auth.login({
       provider: AuthProviders.Facebook,
       method: AuthMethods.Popup,
     }).then(
         (success) => {
         this.router.navigate(['/userhome']);
       }).catch(
         (err) => {
         this.error = err;
       })
   }

   loginGoogle() {
     this.af.auth.login({
       provider: AuthProviders.Google,
       method: AuthMethods.Popup,
     }).then(
         (success) => {
         this.router.navigate(['/userhome']);
       }).catch(
         (err) => {
         this.error = err;
       })
   }


  ngOnInit() {
  }
}
