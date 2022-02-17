import {Component, OnInit} from '@angular/core';
import {Project} from "../../../models/project/project.model";
import {MatDialog} from "@angular/material/dialog";
import {CreateProjectComponent} from "../create-project/create-project.component";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent);

    dialogRef.afterClosed().subscribe(project => {
      if (project){
        this.projects.push(project);
      }
    });
  }

  private loadProjects(): void {
    this.todoService.listProjects()
      .subscribe(data => {
        this.projects = data.data;
      });
  }
}
