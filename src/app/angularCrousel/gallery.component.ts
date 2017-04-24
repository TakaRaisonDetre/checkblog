import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  template: `
	<div class="modal fade" id="selectedImageModal" >
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-body">
	         <img *ngIf="selectedImage" src="{{selectedImage.url}}" style="height:300px">
	      </div>
	    </div>
	  </div>
	</div>
  	<ul id="thumbnailsList">
  	   <li *ngFor="let image of datasource" >
  	      <img src="{{image.url}}" class="tn"
  		  width="191" height="146"  
  		  data-toggle="modal" data-target="#selectedImageModal"
                  (click)=setSelectedImage(image)>
  	   </li>
  	</ul>
  `,
  styles: [`
  	ul { padding:0; width:780px; margin:20px auto}
  	li { display:inline;}
        .tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
        }
  	.modal-content {
	    width: 670px !important;
	}
  `]
})
export class GalleryComponent { 
 
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }
}