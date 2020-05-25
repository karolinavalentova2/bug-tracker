import {Component, OnInit} from '@angular/core';
import {mockTableProject} from '../../../../models/mockDataModels/mockTableProject';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent implements OnInit {
  mocktableProject = mockTableProject;
  constructor() { }

  ngOnInit(): void {
  }

}
