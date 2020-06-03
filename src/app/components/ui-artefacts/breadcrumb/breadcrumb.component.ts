import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbData} from '../../../models/mockDataTypes';
import {Subscription} from 'rxjs';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public data: Array<BreadcrumbData>;
  private pathSub: Subscription;
  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.data = [];
    this.pathSub = this.navService.doListenBreadcrumbForData().subscribe(entries => {
      this.data = entries;
    });
  }

  public doGoTo(path) {
    this.navService.doNavigate(path);
  }

  ngOnDestroy(): void {
    this.pathSub.unsubscribe();
  }

}
