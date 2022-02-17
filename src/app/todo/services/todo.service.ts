import {Injectable} from '@angular/core';
import {ApiService} from "../../core/api/api.service";
import {Observable} from "rxjs";
import {Project} from "../../models/project/project.model";
import {ApiResponse} from "../../models/api/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService extends ApiService {
  private projects = 'projects';

  createProject(project: Project): Observable<ApiResponse<Project>> {
    return this.post(`${this.projects}`, project);
  }

  listProjects(): Observable<ApiResponse<Project[]>> {
    return this.get(this.projects);
  }
}
