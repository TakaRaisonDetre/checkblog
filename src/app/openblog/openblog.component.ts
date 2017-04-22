import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.services';
import {SafeUrlPipe} from '../safeurl.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import * as firebase from 'firebase';

// Prior log in interface collection
import {Blog} from '../blog';
import {Category } from '../category';
import {Status} from '../status'; 

@Component({
  selector: 'app-openblog',
  templateUrl: './openblog.component.html',
  styleUrls: ['./openblog.component.css'],
  providers : [FirebaseService]
})
export class OpenblogComponent implements OnInit {
blogs:Blog[];
categories  : Category[];
statuses : Status[];
imageUrl : any[];

// state manipulation
appState : string;
activeKey : string;
error: any;

constructor(
  private _firebaseService : FirebaseService, 
  private sanitizer: DomSanitizer,
  public af:AngularFire, 
  private router: Router
   ) {


}
ngOnInit (){

this._firebaseService.getBlogsOderbyDate().subscribe(blg => {
this.blogs = blg

console.log(blg);
 // TODO
  //  for loop statement for displaying blog image and video 
  for (let entry of blg ){
   let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(entry.path);
     storageRef.child(entry.path).getDownloadURL().then((url)=>{
        this.imageUrl = url;
   }) ; 
   }    

});
this._firebaseService.getCategory().subscribe(categories => {
this.categories = categories

});
this._firebaseService.geStatus().subscribe(statuses => {
this.statuses = statuses

});
}

changeState(state, key) {
  console.log('changing state to:' +state )
if(key){
  console.log('changing key to:' +key )
this.activeKey = key;
}
this.appState = state;

}


loginFacebook() {
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

}

