import { Component, OnInit,Inject  } from '@angular/core';
import {UserfirebaseService} from '../../services/userfirebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import * as firebase from 'firebase';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
id:any;
listing:any;
imageUrl:any;

  constructor(
    private userfirebase : UserfirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
   
  ) { }

  ngOnInit() {
   this.id = this.route.snapshot.params['id'];
    this.userfirebase.getListingDetail(this.id).
    subscribe(list =>
    {
      this.listing = list;
   //  console.log(list);
      // to do display image


  if (list.path){
    let storageRef = firebase.storage().ref();
    let spaceRef=storageRef.child('/Bloggingimages/blog/' + list.path);
    storageRef.child(list.path).getDownloadURL().then((url) => {
       this.imageUrl = url;
  });
  }
    
  // .catch((error)=>{
  //   console.log(error);
    });
   
   
}
}
