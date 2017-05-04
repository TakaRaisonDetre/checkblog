import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import {FirebaseService} from '../../services/firebase.services';
import {UserfirebaseService} from '../../services/userfirebase.service';

// interface
import {Category } from '../../category';
import {Status} from '../../status'; 
import {Blog} from '../../blog';
import {Subject} from 'rxjs/Subject';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers : [FirebaseService]
})
export class AuthorsComponent implements OnInit {

  name: any;
  state: string = '';
  
  blogs :  Blog[];
  statuses : Status[];
  categories : Category[];

   appState : string;
   activeKey: string;
   showAdd:boolean=false;
   files=[];
// used for image saving
 title: any;
 writtenby: any;
 category: any;
 publishedstatus: any;
 videourl:any;
 shortbody: any; 
 longbodyone: any; 
 longbodytwo: any;
 longbodythree: any;
 imgurl:any;
 path:any;

// used for updating blog
 activeTitle: string;
 activeWrittenby: string;
 activeShortbody: string; 
 activeLongbodyone: string; 
 activeLongbodytwo: string;
 activeLongbodythree: string;
 activePublishedstatus: string;
 activeCategory: string;
 activeVideourl:string;
 activeImgurl:string;
 activePath:string;
 //public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
 subject = new Subject(); 


  constructor(
  public af: AngularFire, 
  private router: Router, 
 private _firebaseService: FirebaseService,
 private firebaseService:UserfirebaseService,
  ) {
const queryObservable = af.database.list('/blogs', {
  query: {
    orderByChild: 'category',
    equalTo: this.subject 
  }
});

// subscribe to changes
queryObservable.subscribe(queriedItems => {
  
  this.blogs=queriedItems.reverse();;
});

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }
logout() {
     this.af.auth.logout();
     console.log('logged out');
     this.router.navigateByUrl('/');
  }

ngOnInit() {
this._firebaseService.getBlogs().subscribe(blogs => {
this.blogs = blogs.reverse();
});
this._firebaseService.getCategory().subscribe(categories => {
this.categories = categories
});
this._firebaseService.geStatus().subscribe(statuses => {
this.statuses = statuses
});
}

filterCategory(category){
  if(category){
    this.subject.next(category)
  }else{
    this._firebaseService.getBlogsByCategory().subscribe(res=>{
      this.blogs=res;
    })
  }
  

}


changeState(state, key) {
  console.log('changing state to:' +state )
if(key){
  console.log('changing key to:' +key )
this.activeKey = key;
}
this.appState = state;
}


// add blog with image
addBlogwithImage(){

// var createdat = new Date().toString();
console.log(this.title);
let Blog = {
 title:this.title,
 writtenby:this.writtenby,
 category: this.category,
 publishedstatus: this.publishedstatus,
 shortbody: this.shortbody, 
 longbodyone: this.longbodyone, 
 longbodytwo: this.longbodytwo,
 longbodythree: this.longbodythree,
 files:this.files,
//  createdat : this.createdat
  videourl:this.videourl||"",
 }
this._firebaseService.addBlogTwo(Blog)
this.changeState('default', this);
this.showAdd=false;


}

// adding blog without image but with VIDEO
addBlog(
 title: string,
 writtenby: string,
 shortbody: string, 
 longbodyone: string, 
 longbodytwo: string,
 longbodythree: string,
 publishedstatus: string,
 category: string,
 videourl:string,
 
 ){

 var createdat = new Date().toString();
 var path = "";
 var newBlog = {

 title: title,
 writtenby: writtenby,
 shortbody: shortbody, 
 longbodyone: longbodyone, 
 longbodytwo: longbodytwo,
 longbodythree: longbodythree,
 publishedstatus: publishedstatus,
 category: category,
 createdat:createdat,
 videourl:videourl,
 path:path,
}

this.firebaseService.addBlogWithImage(newBlog);
this.changeState('default', this);
 }


showEdit(item) {
this.changeState('edit', item.$key);
 this.activeTitle = item.title;
 this.activeWrittenby = item.writtenby;
 this.activeShortbody=item.shortbody;
 this.activeLongbodyone=item.longbodyone;
 this.activeLongbodytwo=item.longbodytwo;
 this.activeLongbodythree=item.longbodythree;
 this.activePublishedstatus=item.publishedstatus;
 this.activeCategory=item.category;
 this.activeVideourl=item.videourl;
 this.activePath = item.path;
//  this.activeImgurl =item.imgurl;


}
upDateBlog($event){
  $event.preventDefault();
var updBlog ={
 title:this.activeTitle,
 writtenby :this.activeWrittenby,
 shortbody :this.activeShortbody,
 longbodyone: this.activeLongbodyone,
 longbodytwo:this.activeLongbodytwo,
 longbodythree:this.activeLongbodythree,
 publishedstatus:this.activePublishedstatus,
 category:this.activeCategory,
 videourl:this.activeVideourl||"",
 //path:this.path,
//  imgurl:this.activeImgurl
}
this._firebaseService.updateblog(this.activeKey, updBlog).then(res=>{
  console.log(res)
},reason=>{
  console.log("reason=",reason)
});
this.changeState('default',this);
}

deleteblog(key){
this._firebaseService.deleteblog(key);
this.changeState('default',this);


}
handler(event){
  this.files=[].slice.apply(event.target.files);
}


 }

