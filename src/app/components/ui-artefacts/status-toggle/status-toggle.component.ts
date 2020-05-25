import {Component, Input, OnInit} from '@angular/core';
import {mockTableProject} from '../../../models/mockDataModels/mockTableProject';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.scss']
})
export class StatusToggleComponent implements OnInit {
  @Input() isChecked: boolean;
  mocktableProject = mockTableProject;

  constructor() { }

  ngOnInit(): void {
  }

  doToggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
}
