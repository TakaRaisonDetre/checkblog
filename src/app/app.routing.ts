import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
// import { MembersComponent } from './members/members.component';
import { AuthGuard } from './services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import {TeamComponent} from './team/team.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {OpenblogComponent} from './openblog/openblog.component';
import {MeterComponent} from './meter/meter.component';

// user home componenet import collection 
import { UserhomeComponent } from './usercomponents/userhome/userhome.component';
import { UserloginComponent } from './usercomponents/userlogin/userlogin.component';
import { BloglistComponent } from './usercomponents/bloglist/bloglist.component';
import { BloglistsComponent } from './usercomponents/bloglists/bloglists.component';
import { AuthorsComponent } from './usercomponents/authors/authors.component';
// progress display component
import {SailingskillComponent} from './usercomponents/sailingskill/sailingskill.component';
import {FundraisingComponent} from './usercomponents/fundraising/fundraising.component';
import {MentaltrainingComponent} from './usercomponents/mentaltraining/mentaltraining.component';
import {TeambuildingComponent} from './usercomponents/teambuilding/teambuilding.component';
import {PhysicaltrainingComponent} from './usercomponents/physicaltraining/physicaltraining.component';



const appRoutes : Routes = [ 
// {path : '', component : AppComponent},
{path: 'Welcome', component : WelcomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login-email', component: EmailComponent },
{ path: 'about', component: TeamComponent },
{ path: 'privacypolicy', component: PrivacyComponent },
{ path: 'openblog', component: OpenblogComponent },
{ path: 'meter', component: MeterComponent },

// progress display component
{path : 'teambuilding', component: TeambuildingComponent},
{path : 'fundraising', component: FundraisingComponent},
{path : 'mentaltraining', component: MentaltrainingComponent},
{path : 'sailingskill', component: SailingskillComponent},
{path : 'physicaltraining', component: PhysicaltrainingComponent},

// { path: 'members', component: MembersComponent },
// usercomponents routing list tbese are only accessed by login members
{ path: 'userhome', component: UserhomeComponent, canActivate: [AuthGuard] },
{ path: 'userlogin', component: UserloginComponent },
{ path: 'bloglists', component: BloglistsComponent, canActivate:[AuthGuard]},
{ path: 'authors', component: AuthorsComponent,canActivate: [AuthGuard] },
{path: 'individual-blog/:id', component:BloglistComponent, canActivate: [AuthGuard]},

];
export const routing : ModuleWithProviders =
RouterModule.forRoot(appRoutes);