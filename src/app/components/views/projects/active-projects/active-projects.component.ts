import {Component, OnInit} from '@angular/core';
import {mockTableProject} from '../../../../models/mockDataModels/mockTableProject';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit {
  mocktableProject = mockTableProject;
  constructor() { }

  ngOnInit(): void {
  }
}
