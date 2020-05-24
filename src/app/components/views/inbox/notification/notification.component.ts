import {Component, Input, OnInit} from '@angular/core';
import {IconsURIs} from '../../../../models/icons';
import {NotificationEntry} from '../../../../models/mockDataTypes';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notifInfo: NotificationEntry;

  icons = IconsURIs;

  constructor() { }

  ngOnInit(): void {
  }

}
