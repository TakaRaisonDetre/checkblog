import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {blistings} from '../models/blistings';
import {Blog} from '../blog';

@Injectable()
export class UserfirebaseService {

blogs : FirebaseListObservable<Blog[]>;
Bloglistings : FirebaseListObservable<any[]>;
Bloglisting : FirebaseObjectObservable<any>;
folder2:any;

  constructor(private af: AngularFire) { 
    this.folder2='Bloggingimages/blog'
  }

getBlogListings (){
this.Bloglistings = this.af.database.list('/blogs', {
 query : {
      orderByChild :'publishedstatus',
      limitToFirst: 10,
      equalTo:'公開'
   }
}
) as
// take interface blistings
FirebaseListObservable<blistings[]>; 
return this.Bloglistings;
}

getListingDetail(id){
this.Bloglisting = this.af.database.object('/blogs/' + id) as
//take interface blistings again but not array 
FirebaseObjectObservable<blistings>
return this.Bloglisting;
}

// saing information with image
addBlogWithImage(Blog){
// create root ref of storage
let storageRef = firebase.storage().ref();
for(let selectedFile of [(<HTMLInputElement>document.getElementById('imageurl')).files[0]]){
let path =`/${this.folder2}/${selectedFile.name}`;
let iRef = storageRef.child(path);
iRef.put(selectedFile).then((snapshot)=>{
  Blog.imgurl=selectedFile.name;
  Blog.path =path;
return this.blogs.push(Blog);  
}); 
}
}


}
