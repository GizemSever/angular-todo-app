import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../../models/project/project.model';
import {TodoService} from '../../services/todo.service';
import {Board} from '../../../models/board/board.model';
import {SnackBarService} from '../../../shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  private id: number;
  public project: Project;
  public boards: Board[] = [];

  constructor(
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
      });
  }

  removeProject(): void {
    this.todoService.deleteProject(this.id)
      .subscribe(data => {
        this.snackBar.success(`project_removed`);
        this.router.navigate(['/app/projects']);
      });
  }
}
