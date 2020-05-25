import {Component, Input, OnInit} from '@angular/core';
import {IconsURIs} from '../../../../models/icons';
import {Project} from '../../../../models/mockDataTypes';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {
  @Input() Projects: Array<Project>;
  @Input() showOn: {property: string; value: any; };
  icons = IconsURIs;
  isChecked: boolean;
  filteredProjects: Array<Project> = [];

  constructor() { }

  ngOnInit(): void {
    if (this.Projects) {
      if (!this.showOn || !this.showOn.property) {
        this.filteredProjects = this.Projects;
        return;
      }
      this.Projects.forEach(project => {
        if (project[this.showOn.property] === this.showOn.value) {
          this.filteredProjects.push(project);
        }
      });
    }
  }
}
