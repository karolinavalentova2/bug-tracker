import { Component, OnInit } from '@angular/core';
import {IconsURIs} from '../../../models/icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  icons = IconsURIs;

  constructor() { }

  ngOnInit(): void {
  }

}
