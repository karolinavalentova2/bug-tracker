import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import {Imports} from './app.imports';
import {Components} from './app.components';

@NgModule({
  declarations: [
    ...Components,
  ],
  imports: [
    ...Imports,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
