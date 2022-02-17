import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TodoService} from "../../services/todo.service";
import {Project} from "../../../models/project/project.model";
import {SnackBarService} from "../../../shared/snack-bar/snack-bar.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  public createProjectForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private snackBarService: SnackBarService
  ) {
    this.createProjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
  }

  createProject(): void {
    this.todoService.createProject(new Project(this.createProjectForm.get('name').value))
      .subscribe(data => {
        this.snackBarService.success(`project_created`);
        this.dialogRef.close(data.data);
      }, error => {
        this.snackBarService.error(`project_not_created`);
      });
  }
}
