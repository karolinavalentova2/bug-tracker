import {Routes} from '@angular/router';
import {LoginComponent} from './components/views/login/login.component';
import {ProjectsComponent} from './components/views/projects/projects.component';
import {InboxComponent} from './components/views/inbox/inbox.component';
import {UsersComponent} from './components/views/users/users.component';
import {SettingsComponent} from './components/views/settings/settings.component';
import {MyProjectsComponent} from './components/views/projects/my-projects/my-projects.component';

export const RouterPaths: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
];
