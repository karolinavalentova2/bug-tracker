import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {navPaths} from '../models/mockDataModels/navigationPaths';
import {BreadcrumbData} from '../models/mockDataTypes';
@Injectable({
  providedIn: 'root',
})

export class NavigationService {
  private lastActiveURLPath: string;
  private navSubject = new Subject<string>();

  private breadcrumbsSubject = new Subject<BreadcrumbData[]>();
  private currentBreadcrumbData: BreadcrumbData[] = [];
  constructor(private routerService: Router) {
    this.doWatchURL();
  }

  public doListenToNavigationPathChanges() {
    return this.navSubject.asObservable();
  }

  public doReturnLastActiveURLPath() {
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

  public doAddBreadcrumbEntries(entries: BreadcrumbData[]) {
    this.currentBreadcrumbData = entries;

    this.breadcrumbsSubject.next(this.currentBreadcrumbData);
  }

  public doDeleteBreadcrumbEntry(position?: number) {
    if(position) {
      this.currentBreadcrumbData = this.currentBreadcrumbData.splice(position);
    } else {
      this.currentBreadcrumbData = [];
    }

    this.breadcrumbsSubject.next(this.currentBreadcrumbData);
  }

  public doListenBreadcrumbForData(): Observable<BreadcrumbData[]> {
    return this.breadcrumbsSubject.asObservable();
  }

  public doNavigate(path?: string) {
    this.routerService.navigate([path]).then().catch(e => console.error(e));
  }
}
