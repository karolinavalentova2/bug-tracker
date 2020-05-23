import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  public isLoggedIn = new Subject<string>();

  constructor() {
  }

  doEmitLoginStatus(status) {
    this.isLoggedIn.next(status);
  }

  public doListenToLogin() {
    return this.isLoggedIn.asObservable();
  }
}
