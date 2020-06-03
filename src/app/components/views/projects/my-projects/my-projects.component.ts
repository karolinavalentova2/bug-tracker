import {Component, OnDestroy, OnInit} from '@angular/core';
import {IconsURIs} from '../../../../models/icons';
import {mockTableProject} from 'src/app/models/mockDataModels/mockTableProject';
import {NavigationService} from '../../../../services/navigation.service';
import {BreadcrumbData, FilterConfig, FilterEntry} from '../../../../models/mockDataTypes';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  icons = IconsURIs;
  isChecked: boolean;
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
        name: 'My projects',
        path: '/my-projects',
      }
    ];

    this.filterEntries = [
      {
        name: 'Recent projects',
        property: 'recentEdit',
        value: true,
        isDefaultSelected: true,
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
