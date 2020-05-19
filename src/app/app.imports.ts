import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RouterPaths} from './app.router';

export const Imports = [
  BrowserModule,
  RouterModule.forRoot(RouterPaths),
];
