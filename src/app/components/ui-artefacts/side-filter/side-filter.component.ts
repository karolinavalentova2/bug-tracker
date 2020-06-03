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
  constructor() { }

  ngOnInit(): void {
  }

  public doFilterBy(prop: string, value: any) {
    this.filterConfig.emit({
      prop,
      value,
    });
  }

}
