import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../../models/project/project.model';
import {TodoService} from '../../services/todo.service';
import {Board} from '../../../models/board/board.model';
import {SnackBarService} from '../../../shared/snack-bar/snack-bar.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Task} from '../../../models/task/task.model';
import {MatDialog} from '@angular/material/dialog';
import {UpsertTaskComponent, UpsertTaskData} from '../upsert-task/upsert-task.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  private id: number;
  public project: Project;
  public boards: Board[] = [];
  public selectedTask?: Task;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private todoService: TodoService,
    private snackBar: SnackBarService,
    private router: Router
  ) {

    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.id = params.id;
        this.getProject();
      }
    });

  }

  ngOnInit(): void {
    this.listBoards();
  }

  private getProject(): void {
    this.todoService.getProject(this.id)
      .subscribe(data => {
        this.project = data.data;
      });
  }

  private listBoards(): void {
    this.todoService.listBoards(this.id)
      .subscribe(data => {
        this.boards = data.data;
        this.loadTasks();
      });
  }

  private loadTasks(): void {
    this.boards.forEach(board => {
      this.setTaskList(board);
    });
  }

  private setTaskList(board: Board): void {
    this.todoService.listTasks(this.id, board.id)
      .subscribe(data => {
        board.tasks = data.data;
      }, error => board.tasks = []);
  }

  boardTitle(board: Board): string {
    let boardName = board.name;
    if (boardName.length <= 0) {
      boardName = board.type;
    }
    return boardName;
  }

  connectedBoards(board: Board): string[] {
    return this.boards.map(b => {
      if (b.id !== board.id) {
        return `dropList-${b.id}`;
      }
    });
  }

  removeProject(): void {
    this.todoService.deleteProject(this.id)
      .subscribe(data => {
        this.snackBar.success(`project_removed`);
        this.router.navigate(['/app/projects']);
      });
  }

  drop(event: CdkDragDrop<Task[]>): void {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  private getUpsertInjectData(isCreateMode: boolean, boardId: number, task: Task): UpsertTaskData {
    return {
      isCreateMode,
      projectId: this.project.id,
      boardId,
      task
    };
  }

  createTask(board: Board): void {
    const dialogRef = this.dialog.open(UpsertTaskComponent, {
      data: this.getUpsertInjectData(true, board.id, new Task('', '', false, board.id))
    });

    dialogRef.afterClosed().subscribe((data: UpsertTaskData | null) => {
      if (data !== null) {
        board.tasks.push(data.task);
      }
    });
  }

  setData(task: Task, board: Board): void {
    const dialogRef = this.dialog.open(UpsertTaskComponent, {
      data: this.getUpsertInjectData(false, board.id, task)
    });
  }

}
