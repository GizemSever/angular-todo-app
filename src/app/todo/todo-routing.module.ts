import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoLayoutComponent} from "./components/todo-layout/todo-layout.component";
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  {
    path: '',
    component: TodoLayoutComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
