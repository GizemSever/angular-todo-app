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
import { UpsertTaskComponent } from './components/upsert-task/upsert-task.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProjectsComponent, TodoLayoutComponent, CreateProjectComponent, BoardComponent, ProjectDetailComponent, UpsertTaskComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
