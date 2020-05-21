import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from '../../../../../services/navigation.service';

@Component({
  selector: 'app-sub-navigation-entry',
  templateUrl: './sub-navigation-entry.component.html',
  styleUrls: ['./sub-navigation-entry.component.scss']
})
export class SubNavigationEntryComponent implements OnInit {
  @Input() activePath: string;
  @Input() path: string;
  @Input() name: string;
  @Input() parent: string;

  constructor(public navigationService: NavigationService) {}

  ngOnInit(): void {
  }

}
