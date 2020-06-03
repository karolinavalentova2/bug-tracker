import {Component, OnDestroy, OnInit} from '@angular/core';
import {mockTableProject} from '../../../../models/mockDataModels/mockTableProject';
import {NavigationService} from '../../../../services/navigation.service';
import {BreadcrumbData, FilterConfig, FilterEntry} from '../../../../models/mockDataTypes';
import {FilterEntries} from '../../../../pipes/filter.pipe';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit, OnDestroy {
  mocktableProject = mockTableProject;

  public filterConfig: FilterConfig = {
    prop: 'recentEdit',
    value: true,
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
        name: 'Active projects',
        path: '/active-projects',
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

