import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';

// import services
import {FirebaseService} from './services/firebase.services';
import {UserfirebaseService} from './services/userfirebase.service';


import {routing} from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { SafeUrlPipe } from './safeurl.pipe';

import {Pipe, PipeTransform} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NavbarComponent } from './usercomponents/navbar/navbar.component';
import { UserhomeComponent } from './usercomponents/userhome/userhome.component';
import {AuthGuard} from './services/auth.service';

// usercomponents collections
import { UserloginComponent } from './usercomponents/userlogin/userlogin.component';
import { BloglistsComponent } from './usercomponents/bloglists/bloglists.component';
import { BloglistComponent } from './usercomponents/bloglist/bloglist.component';
import { AuthorsComponent } from './usercomponents/authors/authors.component';
import { TeambuildingComponent } from './usercomponents/teambuilding/teambuilding.component';
import { FundraisingComponent } from './usercomponents/fundraising/fundraising.component';
import { MentaltrainingComponent } from './usercomponents/mentaltraining/mentaltraining.component';
import { SailingskillComponent } from './usercomponents/sailingskill/sailingskill.component';
import { PhysicaltrainingComponent } from './usercomponents/physicaltraining/physicaltraining.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TeamComponent } from './team/team.component';
import { OpenblogComponent } from './openblog/openblog.component';
import { MeterComponent } from './meter/meter.component';

import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

import {AngularCarousel} from './angularCrousel/AngularCarousel.component'
import {Slide} from './angularCrousel/slide.component';
import {Carousel} from './angularCrousel/carousel.component'
import {GalleryComponent} from './angularCrousel/gallery.component';
export const firebaseConfig ={
apiKey: "AIzaSyD-ckdmA_bo9ntpUDyE1NTiX5IUhvdBAck",
    authDomain: "wakatakasailing-e7410.firebaseapp.com",
    databaseURL: "https://wakatakasailing-e7410.firebaseio.com",
    storageBucket: "wakatakasailing-e7410.appspot.com",
    messagingSenderId: "244864612995"
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    SafeUrlPipe,
    NavbarComponent,
    UserhomeComponent,
    UserloginComponent,
    BloglistsComponent,
    BloglistComponent,
    AuthorsComponent,
    TeambuildingComponent,
    FundraisingComponent,
    MentaltrainingComponent,
    SailingskillComponent,
    PhysicaltrainingComponent,
    PrivacyComponent,
    TeamComponent,
    OpenblogComponent,
    MeterComponent,AngularCarousel,Carousel,Slide,GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    Ng2PaginationModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
],
  providers: [FirebaseService, UserfirebaseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
