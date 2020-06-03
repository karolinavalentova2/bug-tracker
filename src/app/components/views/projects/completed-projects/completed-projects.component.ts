import {Component, OnDestroy, OnInit} from '@angular/core';
import {mockTableProject} from '../../../../models/mockDataModels/mockTableProject';
import {NavigationService} from '../../../../services/navigation.service';
import {BreadcrumbData, FilterConfig, FilterEntry} from '../../../../models/mockDataTypes';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent implements OnInit, OnDestroy {
  mocktableProject = mockTableProject;

  public filterConfig: FilterConfig = {
    prop: null,
    value: null,
  };
  public filterEntries: FilterEntry[] = [];

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    const breadcrumbData: BreadcrumbData[] = [
      {
        name: 'Projects',
        path: null,
      },
      {
        name: 'Completed projects',
        path: '/completed-projects',
      }
    ];

    this.filterEntries = [
      {
        name: 'Recent projects',
        property: 'recentEdit',
        value: true,
      },
      {
        name: 'All projects',
        property: null,
        value: null,
        isDefaultSelected: true,
      }
    ];

    this.navService.doAddBreadcrumbEntries(breadcrumbData);
  }

  ngOnDestroy(): void {
    this.navService.doDeleteBreadcrumbEntry();
  }
  public doListenToFilterChanged(filterConf: FilterConfig) {
    this.filterConfig = filterConf;
  }
}
