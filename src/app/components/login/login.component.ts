import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Angular 4 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  passwd;
  emailSignup:string;
  passwordSignup:string;
  isavailable: boolean = false;
  isSignUp: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router
  )
  {
    this.isSignUp = false;

  }


  ngOnInit() {
    this.formdata = new FormGroup({
         emailid: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
  }

  signUp() {
    this.isSignUp = !this.isSignUp;
  }

  loginLink() {
    this.isSignUp = false;
  }

  passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {"passwd" : true};
      }
   }

  onClickSubmit(data) {this.emailid = data.emailid;}

  register(emailSignup, passwordSignup) {
    this.dataService.register(emailSignup, passwordSignup);
  }

  clickLogin(emailid, passwd) {
    // this.dataService.login("rambutan@gmail.com", "rambutan")
    this.dataService.login(emailid, passwd)
    .then(res => {
      this.router.navigate(['/firebase']);
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }
}



export function compute(number) {
  if (number < 0)
    return 0;

  return number + 1;
}





// clickLogin() {
//   this.dataService.login("rambutan@gmail.com", "rambutan")
// }
