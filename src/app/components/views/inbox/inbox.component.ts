import {Component, OnDestroy, OnInit} from '@angular/core';
import {mockNotification} from '../../../models/mockDataModels/mockNotification';
import {BreadcrumbData, FilterConfig, FilterEntry, NotificationEntry} from '../../../models/mockDataTypes';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {
  tmpMockNotifications: Array<NotificationEntry> = mockNotification;
  mockNotification: Array<NotificationEntry> = mockNotification;

  public filterConfig: FilterConfig = {
    prop: 'isConfirmed',
    value: false,
  };
  public filterEntries: FilterEntry[] = [];

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    const breadcrumbData: BreadcrumbData[] = [
      {
        name: 'Inbox',
        path: '/inbox',
      },
    ];
    this.filterEntries = [
      {
        name: 'Active',
        property: 'isConfirmed',
        value: false,
        isDefaultSelected: true,
      },
      {
        name: 'Archived',
        property: 'isConfirmed',
        value: true,
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
