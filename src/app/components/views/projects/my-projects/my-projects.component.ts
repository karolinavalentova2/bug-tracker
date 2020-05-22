import {Component, OnInit} from '@angular/core';
import {IconsURIs} from '../../../../models/icons';
import {mocktableProject} from 'src/app/models/mockData';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  icons = IconsURIs;
  mocktableProject = mocktableProject;

  usersTotal = new Set();

  constructor() { }

  ngOnInit(): void {
  }

}
