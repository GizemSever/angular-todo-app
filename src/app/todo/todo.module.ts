import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import { ProjectsComponent } from './components/projects/projects.component';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { BoardComponent } from './components/board/board.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


@NgModule({
  declarations: [ProjectsComponent, TodoLayoutComponent, CreateProjectComponent, BoardComponent, ProjectDetailComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
