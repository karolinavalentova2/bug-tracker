import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RouterPaths} from './app.router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';

export const Imports = [
  BrowserModule,
  RouterModule.forRoot(RouterPaths, { useHash: true }),
  FormsModule,
  ReactiveFormsModule,
  NgPipesModule
];
