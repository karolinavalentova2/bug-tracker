import {Routes} from '@angular/router';
import {LoginComponent} from './components/views/login/login.component';
import {ProjectsComponent} from './components/views/projects/projects.component';
import {InboxComponent} from './components/views/inbox/inbox.component';
import {UsersComponent} from './components/views/users/users.component';
import {SettingsComponent} from './components/views/settings/settings.component';
import {MyProjectsComponent} from './components/views/projects/my-projects/my-projects.component';
import {ActiveProjectsComponent} from './components/views/projects/active-projects/active-projects.component';
import {CompletedProjectsComponent} from './components/views/projects/completed-projects/completed-projects.component';
import {AddNewProjectComponent} from './components/views/projects/add-new-project/add-new-project.component';
import {AllUsersComponent} from './components/views/users/all-users/all-users.component';
import {MyProfileComponent} from './components/views/users/my-profile/my-profile.component';
import {AddNewUserComponent} from './components/views/users/add-new-user/add-new-user.component';

export const RouterPaths: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projects', redirectTo: 'my-projects', component: ProjectsComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'active-projects', component: ActiveProjectsComponent },
  { path: 'completed-projects', component: CompletedProjectsComponent },
  { path: 'add-new-project', component: AddNewProjectComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'users', component: UsersComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'add-new-user', component: AddNewUserComponent },
  { path: 'settings', component: SettingsComponent },
];
