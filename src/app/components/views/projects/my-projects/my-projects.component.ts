import {Component, OnInit} from '@angular/core';
import {IconsURIs} from '../../../../models/icons';
import {mockTableProject} from 'src/app/models/mockDataModels/mockTableProject';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  icons = IconsURIs;
  mocktableProject = mockTableProject;

  constructor() { }

  ngOnInit(): void {
  }

}
