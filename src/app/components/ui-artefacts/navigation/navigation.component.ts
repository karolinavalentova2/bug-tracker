import {Component, OnInit} from '@angular/core';
import {navPaths} from 'src/app/models/mockDataModels/navigationPaths';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navPaths = navPaths;

  constructor() {
  }

  ngOnInit(): void {
  }

}
