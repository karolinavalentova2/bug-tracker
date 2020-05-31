import { Component, OnInit } from '@angular/core';
import {BreadcrumbData} from '../../../models/mockDataTypes';
import {Subscription} from 'rxjs';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private data: Array<BreadcrumbData>;
  private pathSub: Subscription;
  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.data = [
      {
        name: 'test',
        path: '',
      },
      {
        name: 'test2',
        path: '',
      },
      {
        name: 'test3',
        path: '',
      }
    ];
    // this.pathSub = this.navService.doListenToNavigationPathChanges().subscribe(res => {
    //
    // })
  }

  private doRenderBreadcrumbData(path) {

  }

  public doGoTo(path) {

  }

}
