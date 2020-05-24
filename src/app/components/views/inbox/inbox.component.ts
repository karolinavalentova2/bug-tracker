import { Component, OnInit } from '@angular/core';
import {mockNotification} from '../../../models/mockDataModels/mockNotification';
import {NotificationEntry} from '../../../models/mockDataTypes';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  mockNotification: Array<NotificationEntry> = mockNotification;

  constructor() { }

  ngOnInit(): void {
  }

}
