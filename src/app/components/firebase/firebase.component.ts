import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Client } from '../../models/Clients';
import { Router } from '@angular/router';
// import { workMeeting } from '../../../assets/images/workMeeting.jpeg';
// import { workMeeting } from 'scr/assets/images/workMeeting.jpeg';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  clients: Client[];
  name: string;
  subject: string;
  count: number = 0;
  screenName: string;

  constructor(
    public http:Http,
    private dataService: DataService,
    private router: Router
  )
  { }

  ngOnInit() {
    this.dataService.getClients().subscribe(clients =>
        { this.clients = clients;
          console.log(clients);
        });

    this.setLoginName();
    console.log("is login: " + this.dataService.isLogin);
  }

  setLoginName() {
    this.name = this.dataService.getScreenName();
  }

  postFirebase(name, subject) {
    let order = new Date();

    if(this.dataService.isLogin) {
      this.dataService.newClient(name, subject, order);
      this.subject = "";
    } else {
      alert("need to login");
      this.router.navigateByUrl('/login');
    }


  }

  getFirebase() {
    return this.http.get('https://air-bender-chat.firebaseio.com/items.json')
      .pipe(map((data: any) => console.log(data.json())
    )).subscribe(result => {
      // console.log(result);
      // console.log(result);
    },
    (error) => console.log(error)
  );
  }

}








// this.postFirebase();
// this.getFirebase();


// postFirebase() {
//   const items = [{
//      name: 'My New Post',
//      subject: 'Hello World!'
//    }];
//
//    const headers = new Headers({ 'Content-Type':  'application/json' })
//
//
//   return this.http.post('https://air-bender-chat.firebaseio.com/data.json', items,
//   {headers: headers});
//
// }
