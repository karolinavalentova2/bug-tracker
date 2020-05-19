import {Routes} from '@angular/router';
import {LoginComponent} from './components/views/login/login.component';
import {ProjectsComponent} from './components/views/projects/projects.component';

export const RouterPaths: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'projects', component: ProjectsComponent},
];
