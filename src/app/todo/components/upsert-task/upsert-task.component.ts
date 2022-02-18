import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Task} from '../../../models/task/task.model';
import {Observable, Subject} from 'rxjs';
import {TodoService} from '../../services/todo.service';
import {ApiResponse} from '../../../models/api/api-response.model';

export interface UpsertTaskData {
  projectId: number;
  boardId: number;
  isCreateMode: boolean;
  task: Task;
}

@Component({
  selector: 'app-upsert-task',
  templateUrl: './upsert-task.component.html',
  styleUrls: ['./upsert-task.component.scss']
})
export class UpsertTaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpsertTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpsertTaskData,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
  }

  save(): void {
    let taskAction = this.todoService.createTask(this.data.projectId, this.data.boardId, this.data.task);

    if (!this.data.isCreateMode) {
      taskAction = this.todoService.setTask(this.data.projectId, this.data.boardId, this.data.task);
    }

    taskAction.subscribe(data => {
      this.data.task = data.data;
    });
    this.dialogRef.close(this.data);
  }
}
