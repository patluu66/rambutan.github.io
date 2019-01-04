import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { DataService } from './services/data.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DirectiveTestDirective } from './directive-test.directive';
import { Bootstrap2Component } from './components/bootstrap2/bootstrap2.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const appRoutes: Routes = [
  { path: '', component: FirebaseComponent },
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'bootstrap', component: Bootstrap2Component },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    // BootstrapComponent,
    LoginComponent,
    FirebaseComponent,
    NavBarComponent,
    DirectiveTestDirective,
    Bootstrap2Component,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'myAngular'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
