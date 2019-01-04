import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Client } from '../models/Clients';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  favoriteGame = "Overwatch";
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
  userEmail:string;
  isLogin:boolean = false;

  constructor(
    public http:Http,
    private afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth) {
    // this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
    this.clientsCollection = this.afs.collection('clients', ref =>
      ref.orderBy('countOrder', 'asc'));
  }

  ngOnInit() {
    // this.favoriteGame = "Overwatch";
  }

  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    });

    return this.clients;
  }

  newClient(userName, userSubject, order) {
    // let user = { lastName: "Patrick", firstName: "Luu", Name: userName, Subject: userSubject };
    let user = { countOrder: order, name: userName, subject: userSubject };
    this.clientsCollection.add(user);
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => { resolve(userData)
          let screenName = userData.user.email.split('@');
          console.log(userData.user.email.split('@'));
          this.userEmail = screenName[0];
          this.isLogin = true;
          // console.log(this.isLogin);
        })
        .catch(err => reject(err))
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => { resolve(userData)
          // let screenName = userData.user.email.split('@');
          console.log(userData);
          alert("Sign up success!");
          // this.userEmail = screenName[0];
        })
        .catch(err => { reject(err)
          alert("Unsuccess signup");
        })
    });
  }

  getScreenName() {
    return this.userEmail;
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((data: any) => data.json()
    ))
  }

  getWeathers() {
    let city = "Irving";
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial' + '&APPID=6bf9870e82dcbe8003e32440f76c2775')
      .map((data: Response) => data.json()
    )
  }

}








// import { AngularFireAuth } from 'angularfire2/auth';


// login(email: string, password: string) {
//   return new Promise((resolve, reject) => {
//     this.afAuth.auth.signInWithEmailAndPassword(email, password)
//       .then(userData => { resolve(userData)
//         console.log(userData.user.email);
//       },
//     err => reject(err))
//   });
// }


  // getPosts() {
  //   let city = "Oakland";
  //   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&APPID=6bf9870e82dcbe8003e32440f76c2775')
  //   .pipe(map((data: any) => { console.log(data.json()) })).subscribe(result => {
  //     console.log(result);
  //   });
  // }


  // getPosts() {
  //   let city = "Oakland";
  //   this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&APPID=6bf9870e82dcbe8003e32440f76c2775')
  //     .subscribe((response) => {
  //       const keys = response;
  //       keys.map(key =>
  //         console.log(key)
  //       )
  //       // console.log(response)
  //     });
  // }



  // getPosts() {
  //   let city = "Oakland";
  //   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&APPID=6bf9870e82dcbe8003e32440f76c2775')
  //     map((response: Response) => response.json());
  // }
