import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterConfig, FilterEntry} from '../../../models/mockDataTypes';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit {
  @Input() labels: FilterEntry[];
  @Output() filterConfig = new EventEmitter<FilterConfig>();

  selectState = '';
  constructor() { }

  ngOnInit(): void {
    this.labels.forEach(label => {
      if (label.isDefaultSelected) {
        this.selectState = label.name;
      }
    });
  }

  public doFilterBy(prop: string, value: any, selectedButton: string) {
    this.selectState = selectedButton;
    this.filterConfig.emit({
      prop,
      value,
    });
  }

}
