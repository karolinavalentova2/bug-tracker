import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
declare const gapi;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  isLoginVisible: boolean;
  loginFailed: boolean;

  tempEmail = 'email@email.com';
  tempPassword = 'password';

  formVal = new FormGroup({
    submitedEmail: new FormControl(''),
    submitedPassword: new FormControl(''),
});

  constructor(private router: Router,
              public logingService: LoginService) { }

  ngOnInit(): void {
}

  onSubmit() {
    if (this.tempEmail === this.formVal.value.submitedEmail && this.tempPassword === this.formVal.value.submitedPassword) {
      console.log('logged in');
      this.router.navigate(['/projects']);
      this.logingService.doEmitLoginStatus(true);
    } else {
      console.log('wrong credentials');
      this.loginFailed = true;
    }
  }

  // google button
  onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  onFailure(error) {
    console.log(error);
  }
  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSuccess,
      onfailure: this.onFailure
    });
  }

  ngAfterViewInit(): void {
    this.renderButton();
  }
}
