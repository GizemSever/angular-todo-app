import {Injectable} from '@angular/core';
import {ApiService} from '../../core/api/api.service';
import {Observable} from 'rxjs';
import {Project} from '../../models/project/project.model';
import {ApiResponse} from '../../models/api/api-response.model';
import {Board} from '../../models/board/board.model';
import {Task} from '../../models/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends ApiService {

  private projects = 'projects';
  private boards = `boards`;
  private tasks = 'tasks';

  createProject(project: Project): Observable<ApiResponse<Project>> {
    return this.post(`${this.projects}`, project);
  }

  listProjects(): Observable<ApiResponse<Project[]>> {
    return this.get(this.projects);
  }

  getProject(id: number): Observable<ApiResponse<Project>> {
    return this.get(`${this.projects}/${id}`);
  }

  listBoards(projectId: number): Observable<ApiResponse<Board[]>> {
    return this.get(`${this.projects}/${projectId}/${this.boards}`);
  }

  deleteProject(projectId: number): Observable<any> {
    return this.delete(`${this.projects}/${projectId}`);
  }

  listTasks(projectId: number, boardId: number): Observable<ApiResponse<Task[]>> {
    return this.get(`${this.projects}/${projectId}/${this.boards}/${boardId}/${this.tasks}`);
  }

  createTask(projectId: number, boardId: number, task: Task): Observable<ApiResponse<Task>> {
    return this.post(`${this.projects}/${projectId}/${this.boards}/${boardId}/${this.tasks}`, task);
  }

  setTask(projectId: number, boardId: number, task: Task): Observable<ApiResponse<Task>> {
    return this.put(`${this.projects}/${projectId}/${this.boards}/${boardId}/${this.tasks}/${task.id}`, task);
  }

  deleteTask(projectId: number, task: Task): Observable<any> {
    return this.delete(`${this.projects}/${projectId}/${this.boards}/${task.board_id}/${this.tasks}/${task.id}`);
  }
}
