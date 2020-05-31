import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class NavigationService {
  private lastActiveURLPath: string;
  private navSubject = new Subject<string>();
  constructor(private routerService: Router) {
    this.doWatchURL();
  }

  public doListenToNavigationPathChanges() {
    return this.navSubject.asObservable();
  }

  doReturnLastActiveURLPath() {
    return this.lastActiveURLPath;
  }

  private doWatchURL() {
    this.routerService.events.subscribe((val: NavigationEnd) => {
      // see also
      if (val.urlAfterRedirects) {
        this.lastActiveURLPath = val.urlAfterRedirects;
        this.navSubject.next(val.urlAfterRedirects);
      }
    });
  }

  public doNavigate(path?: string) {
    this.routerService.navigate([path]).then().catch(e => console.error(e));
  }
}
