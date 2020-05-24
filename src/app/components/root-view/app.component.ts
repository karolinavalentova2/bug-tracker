import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bug-tracker';
  isLoginVisible = true;
  showLogin: Subscription;

  constructor(private loggingService: LoginService) {
  }

  ngOnInit(): void {
    this.showLogin = this.loggingService.doListenToLogin()
      .subscribe(status => {
        this.isLoginVisible = !status;
      });
  }
}
