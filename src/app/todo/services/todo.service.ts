import {Injectable} from '@angular/core';
import {ApiService} from '../../core/api/api.service';
import {Observable} from 'rxjs';
import {Project} from '../../models/project/project.model';
import {ApiResponse} from '../../models/api/api-response.model';
import {Board} from '../../models/board/board.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends ApiService {
  private projects = 'projects';
  private boards = `boards`;

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
}
