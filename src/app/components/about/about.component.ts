import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  weatherArr: string[];
  city: string;
  selectDelete: number[];
  weatherArrPersistance: string[];

  constructor(private dataService: DataService, private http: Http) { }

  ngOnInit() {
    this.selectDelete = [];

    this.dataService.getWeathers().subscribe(info => {
      console.log(info);
      this.weatherArr = info.list;
      this.city = info.city.name;
      console.log(this.weatherArr);
    });

    // localStorage.setItem("weatherInfo", JSON.stringify(this.weatherArr));
  }

  handleCheckbox(event: any) {
    // console.log(event.target.value);
    let indexSelected = event.target.value;
    if(this.selectDelete.includes(indexSelected) === false) {
      this.selectDelete.push(indexSelected);
    } else {
      this.selectDelete.pop();
    }

    console.log(this.selectDelete);
  }

  clickDelete() {
    let result = [];

    for(let i = 0; i < this.selectDelete.length; i++) {
      let currentDelete = this.selectDelete[i];

      this.weatherArr[currentDelete] = "";
    }

    for(let j = 0; j < this.weatherArr.length; j++) {
       let currentElement = this.weatherArr[j];

       if(currentElement !== "") {
         result.push(currentElement);
       }
    }

    this.weatherArr = result;
    // console.log(localStorage.getItem("weatherInfo"));
    localStorage.setItem("weatherInfo", JSON.stringify(result));
    console.log(JSON.parse(localStorage.getItem("weatherInfo")));
    // this.weatherArr = JSON.parse(localStorage.getItem("weatherInfo"))
    // console.log(this.weatherArrPersistance);

    this.selectDelete = [];

    // console.log(this.weatherArr);
  }














// clickDelete() {
//   let weather = this.weatherArr;
//
//   for(let i = 0; i < this.selectDelete.length; i++) {
//     let currentDelete = this.selectDelete[i];
//
//     weather.splice(currentDelete, 1);
//   }
//
//   this.weatherArr = weather;
//   this.selectDelete = [];
//   console.log(this.weatherArr);
// }

  // clickDelete() {
  //   // console.log(this.weatherArr);
  //   // let weather = this.weatherArr;
  //   // weather.pop();
  //   for(let i = 0; i < this.weatherArr.length; i++) {
  //     let currentWeather = weather[i];
  //
  //     if(this.selectDelete.includes(i)) {
  //       weather.splice(i, 1);
  //     }
  //   }
  //   console.log(weather);
  // }

}
