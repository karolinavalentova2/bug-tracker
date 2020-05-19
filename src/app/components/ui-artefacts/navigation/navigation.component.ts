import { Component, OnInit } from '@angular/core';
import {IconsURIs} from '../../../models/icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  icons = IconsURIs;
  collapsibleState = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsible(id) {
    if (id === this.collapsibleState) {
      this.collapsibleState = 0;
      return;
    }
    this.collapsibleState = id;
  }

}
