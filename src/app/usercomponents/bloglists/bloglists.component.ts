import { Component, OnInit } from '@angular/core';
import {UserfirebaseService} from '../../services/userfirebase.service';
import * as firebase from 'firebase';


import {AngularFire} from 'angularfire2';


@Component({
  selector: 'app-bloglists',
  templateUrl: './bloglists.component.html',
  styleUrls: ['./bloglists.component.css']
})
export class BloglistsComponent implements OnInit {

// state manipulation
appState : string;
activeKey : string;
imageUrl :any;
listings:any;
i: any;
  constructor(
    private userService : UserfirebaseService,
    private af : AngularFire
    ) { }
    
  ngOnInit() {
   this.userService.getBlogListings().subscribe(lists=>{
    
    this.listings = lists;
  
    console.log(lists);
   
  
   
   // TODO
  //  for loop statement for displaying blog image and video 
   // for (let entry of lists ){
  //   let storageRef = firebase.storage().ref();
  //    let spaceRef = storageRef.child("Bloggingimages" + entry.path);
  //     storageRef.child(entry.path).getDownloadURL().then((url)=>{
  //      this.imageUrl = url;
  //  }) ; 
 //  }     
}) ; 
}
}