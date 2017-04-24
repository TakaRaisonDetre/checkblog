/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 * Edited by Ved Prakash
 */
import {Component,Input} from '@angular/core';

/*Angular 2 Carousel - Gallery*/
@Component({
    selector: 'Angularcarousel',
    templateUrl: './AngularCarousel.html'
})
export class AngularCarousel  {
    //The time to show the next photo
    private NextPhotoInterval:number = 3000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    @Input()
     slides

    constructor() {
            
    }

    

    private removeLastSlide() {
        this.slides.pop();
    }
}