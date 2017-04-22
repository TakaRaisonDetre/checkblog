import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

import {Blog} from '../blog';
import {Category } from '../category';
import {Status} from '../status'; 

@Injectable()
export class FirebaseService{
    blogs : FirebaseListObservable<Blog[]>;
    listings : FirebaseListObservable<any[]>;
    blog: FirebaseObjectObservable<any>;

    categories : FirebaseListObservable<Category[]>;
    statuses : FirebaseListObservable<Status[]>;
    folder : any;
    folder2:any;
constructor (private _af : AngularFire) {
this.folder = 'Bloggingimages';
this.folder2='Bloggingimages/blog'

}

getBlogsByCategory(category:string =null) {
  if (category!=null) {
this.blogs = this._af.database.list('/blogs', {
query :{ 
  orderByChild : 'category', 
  equaTo: category}
}) as
FirebaseListObservable<Blog[]>
} else {
this.blogs = this._af.database.list('/blogs') as
FirebaseListObservable<Blog[]>
}
return this.blogs;
}

getBlogs(){
  this.blogs = this._af.database.list('/blogs') as
FirebaseListObservable<Blog[]>
return this.blogs;
}

getBlogsOderbyDate(){
  this.blogs = this._af.database.list('/blogs', {
 query : {
      orderByChild :'publishedstatus',
      limitToFirst: 10,
      equalTo:'公開'
   }
  }) as
FirebaseListObservable<Blog[]>
return this.blogs;
}

getCategory(){
this.categories = this._af.database.list('/categories') as
FirebaseListObservable<Category[]>
return this.categories;
}

geStatus(){
this.statuses = this._af.database.list('/status') as
FirebaseListObservable<Status[]>
return this.statuses;
}

// saing information with image
addBlogTwo(Blog){
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
// this not used yet
getBlogDetails(id){
 this.blog = this._af.database.object('/blogs/' + id) as 
 FirebaseObjectObservable<Blog>
 return this.blog;
}

addblog(newBlog){
return this.blogs.push(newBlog);
}
updateblog(key, updblog){
return this.blogs.update(key, updblog);
}
deleteblog(key){
return this.blogs.remove(key);

}

}
