import { LoginComponent } from './components/views/login/login.component';
import {AppComponent} from './components/root-view/app.component';
import {NavigationComponent} from './components/ui-artefacts/navigation/navigation.component';
import {TopBarComponent} from './components/ui-artefacts/top-bar/top-bar.component';
import {BreadcrumbComponent} from './components/ui-artefacts/breadcrumb/breadcrumb.component';
import {SideFilterComponent} from './components/ui-artefacts/side-filter/side-filter.component';
import {ProjectsComponent} from './components/views/projects/projects.component';
import {InboxComponent} from './components/views/inbox/inbox.component';
import {UsersComponent} from './components/views/users/users.component';
import {SettingsComponent} from './components/views/settings/settings.component';
import {MyProjectsComponent} from './components/views/projects/my-projects/my-projects.component';
import {SubNavigationComponent} from './components/ui-artefacts/navigation/sub-navigation/sub-navigation.component';
import {SubNavigationEntryComponent} from './components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component';
import {ActiveProjectsComponent} from './components/views/projects/active-projects/active-projects.component';
import {CompletedProjectsComponent} from './components/views/projects/completed-projects/completed-projects.component';
import {AddNewProjectComponent} from './components/views/projects/add-new-project/add-new-project.component';
import {StatusToggleComponent} from './components/ui-artefacts/status-toggle/status-toggle.component';
import {AllUsersComponent} from './components/views/users/all-users/all-users.component';
import {MyProfileComponent} from './components/views/users/my-profile/my-profile.component';
import {AddNewUserComponent} from './components/views/users/add-new-user/add-new-user.component';

export const Components: Array<any> = [
  LoginComponent,
  AppComponent,
  NavigationComponent,
  TopBarComponent,
  BreadcrumbComponent,
  ProjectsComponent,
  InboxComponent,
  UsersComponent,
  SettingsComponent,
  MyProjectsComponent,
  SideFilterComponent,
  SubNavigationComponent,
  SubNavigationEntryComponent,
  ActiveProjectsComponent,
  CompletedProjectsComponent,
  AddNewProjectComponent,
  StatusToggleComponent,
  AllUsersComponent,
  MyProfileComponent,
  AddNewUserComponent,
];
