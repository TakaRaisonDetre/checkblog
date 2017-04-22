import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import {FirebaseService} from '../services/firebase.services';

// interface
import {Category } from '../category';
import {Status} from '../status'; 
import {Blog} from '../blog';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers : [FirebaseService]
})

export class MembersComponent implements OnInit {

  name: any;
  state: string = '';
  
  blogs :  Blog[];
  statuses : Status[];
  categories : Category[];

   appState : string;
   activeKey: string;

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

//
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


  constructor(
  public af: AngularFire, 
  private router: Router, 
  private _firebaseService: FirebaseService
  ) {

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
this.blogs = blogs
});
this._firebaseService.getCategory().subscribe(categories => {
this.categories = categories
});
this._firebaseService.geStatus().subscribe(statuses => {
this.statuses = statuses
});
}

filterCategory(category){
this._firebaseService.getBlogsByCategory(category).subscribe(blogs => {
this.blogs = blogs
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


// add blog with image but not video
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
//  createdat : this.createdat
//  videourl:this.videourl,
 }
this._firebaseService.addBlogTwo(Blog);
this.changeState('default', this);
 


}

// adding blog without image but video
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
}

this._firebaseService.addblog(newBlog);
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
//  this.activeImgurl =item.imgurl;


}
upDateBlog(){
var updBlog ={
 title:this.activeTitle,
 writtenby :this.activeWrittenby,
 shortbody :this.activeShortbody,
 longbodyone: this.activeLongbodyone,
 longbodytwo:this.activeLongbodytwo,
 longbodythree:this.activeLongbodythree,
 publishedstatus:this.activePublishedstatus,
 category:this.activeCategory,
 videourl:this.activeVideourl,
//  imgurl:this.activeImgurl
}
this._firebaseService.updateblog(this.activeKey, updBlog);
this.changeState('default',this);
}
deleteblog(key){
this._firebaseService.deleteblog(key);
this.changeState('default',this);


}


 }














