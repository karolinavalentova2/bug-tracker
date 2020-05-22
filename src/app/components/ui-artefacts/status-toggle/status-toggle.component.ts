import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.scss']
})
export class StatusToggleComponent implements OnInit {
  isChecked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  doToggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
}
