import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../../../../services/navigation.service';
import {BreadcrumbData} from '../../../../models/mockDataTypes';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.scss']
})
export class AddNewProjectComponent implements OnInit, OnDestroy {

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    const breadcrumbData: BreadcrumbData[] = [
      {
        name: 'Projects',
        path: null,
      },
      {
        name: 'Add new project',
        path: '/add-new-project',
      }
    ];

    this.navService.doAddBreadcrumbEntries(breadcrumbData);
  }

  ngOnDestroy(): void {
    this.navService.doDeleteBreadcrumbEntry();
  }

}
