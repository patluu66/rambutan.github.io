import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  locationSearch:string;
  weathers:string[];
  location:string;
  long:string;
  lat:string;
  population:string;
  postArr:string[];
  isEdit:boolean;

  constructor(private dataService: DataService, public http:Http) {
    console.log('constructor ran ..')
  }

  ngOnInit() {
    console.log('ngOnInit ran ...')
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'jondoe@yahoo.com';
    this.address = {
      street:'50 Main st.',
      city: 'Boston',
      state:'MA',
    }
    this.postArr = [];
    this.weathers = [];
    this.hobbies = ['Write code', 'Watch Movies', 'Listen to music'];
    this.isEdit = false;

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.postArr = posts;
    });

    console.log("favorite game: " + this.dataService.favoriteGame);

  }

  getWeathers() {
    let city = this.locationSearch;
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&APPID=6bf9870e82dcbe8003e32440f76c2775')
    .pipe(map((data: any) => {
      const forecast = data.json();
      console.log(forecast);
      this.weathers = forecast.list;
      this.location = forecast.city.name;
      this.long = forecast.city.coord.lon;
      this.lat = forecast.city.coord.lat;
      this.population = forecast.city.population;
      console.log(this.weathers);
      console.log(this.long);
      console.log(this.lat);

    })).subscribe(result => {
      // this.person = result;
      // console.log(result);
    });
    // console.log(this.person);
  }



  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;

  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;

  }

}


interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}






















// onClick() {
//   console.log("Hello");
//   this.name = "Patrick Luu"
// }





// public person = [];

// getPosts() {
//   return this.http.get('https://jsonplaceholder.typicode.com/posts')
//   .pipe(map((data: any) => {
//     const userData = data.json();
//     // console.log(forecast);
//     this.postArr = userData;
//     console.log(this.postArr);
//
//   })).subscribe(result => {
//     // this.person = result;
//     // console.log(result);
//   });
//   // console.log(this.person);
// }




// getWeathers() {
//   let city = this.locationSearch;
//   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&APPID=6bf9870e82dcbe8003e32440f76c2775')
//   .pipe(map((data: any) => {
//     const forecast = data.json();
//     console.log(forecast);
//     this.weathers = forecast.list;
//     this.location = forecast.city.name;
//     this.long = forecast.city.coord.lon;
//     this.lat = forecast.city.coord.lat;
//     this.population = forecast.city.population;
//     console.log(this.weathers);
//     console.log(this.long);
//     console.log(this.lat);
//
//   })).subscribe(result => {
//     // this.person = result;
//     // console.log(result);
//   });
//   // console.log(this.person);
// }

// getPosts() {
//   let city = "Oakland";
//   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&APPID=6bf9870e82dcbe8003e32440f76c2775')
//   .pipe(map((data: any) => {
//     const forecast = data.json();
//     console.log(forecast);
//     this.weathers = forecast;
//     console.log(this.weathers);
//
//   })).subscribe(result => {
//     console.log(result);
//   });
// }




// this.getPosts();
// this.getWeathers();


// this.dataService.getPosts();
// this.dataService.getPosts().subscribe((posts) => {
//   console.log(posts);
// });
