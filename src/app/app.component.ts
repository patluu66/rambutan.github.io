import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<any[]>;
  // client: string[];

  constructor(db: AngularFirestore) {

  }

}










// this.items = db.collection('items');
// console.log("_________________")
// console.log(this.items);

// this.newClient();

// this.getClients();


// getClients() {
//   console.log(this.items.snapshotChanges());
// }

// newClient() {
//   this.client = {'James': 'John'}
//   this.items.add(this.client);
// }
