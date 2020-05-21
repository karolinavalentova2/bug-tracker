import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {navPaths} from 'src/app/models/navigationPaths';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  navPaths = navPaths;

  private navigationSub: Subscription;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (!this.navigationSub.closed) {
      this.navigationSub.unsubscribe();
    }
  }
}
