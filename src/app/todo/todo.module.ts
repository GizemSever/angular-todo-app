import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import { ProjectsComponent } from './components/projects/projects.component';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';


@NgModule({
  declarations: [ProjectsComponent, TodoLayoutComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
