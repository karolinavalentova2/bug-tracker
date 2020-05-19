import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import {Imports} from './app.imports';
import {Components} from './app.components';
import { MyProjectsComponent } from './components/views/projects/my-projects/my-projects.component';

@NgModule({
  declarations: [
    ...Components,
    MyProjectsComponent,
  ],
  imports: [
    ...Imports,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
