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
return  this._af.database.list('/blogs', {
query :{ 
  orderByChild : 'category', 
  equaTo: category}
}).filter(res=>{
  console.log(res);
  return res;
})as
FirebaseListObservable<Blog[]>
} else {
return this._af.database.list('/blogs') as
FirebaseListObservable<Blog[]>
}
//return this.blogs;
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
let vm=this;
  Promise.all(Blog.files.map(function(file) {
    let iRef2 = storageRef.child(`/${vm.folder2}/${file.name}`);
    return iRef2.child(file.name).put(file);
  })).then(res=>{
    Blog.files=[];
   res.forEach(item=>{
     Blog.files.push(item["downloadURL"]);
   })
   Blog.imgurl=selectedFile.name;
    Blog.path =path;
  return this.blogs.push(Blog);  
  })
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
return this._af.database.list('/blogs').update(key, updblog).then(res=>{
  console.log(res);
},reason=>{
  console.log(reason)
})
}
deleteblog(key){
return this.blogs.remove(key);

}

}
