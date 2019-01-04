import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { compute } from './login.component'
import { LoginComponent, compute} from './login.component';
// import { } from './login.component';


// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })
});


describe('LoginComponent', () => {
  it('should hide or show signup form', () => {
    let result = new LoginComponent;

    result.signUp();

    expect(result.isSignUp).toBe(true);
  })
});

// describe('LoginComponent2', () => {
//   let component: LoginComponent;
//
//   beforeEach(() => {
//     component = new LoginComponent;
//   });
//
//   it('should hide or show signup form', () => {
//     component.signUp();
//
//     expect(component.isSignUp).toBe(true);
//   })
// });
