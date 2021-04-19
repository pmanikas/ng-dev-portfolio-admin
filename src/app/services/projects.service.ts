import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const PROJECTS_API_URL: string = `${environment.API_ROOT}projects/`;

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Project[]> {
    return this.http.get(`${PROJECTS_API_URL}`)
      .pipe(
        map(res => res as Project[])
      )
  }

  public getById(id: string): Observable<Project> {
    return this.http.get(`${PROJECTS_API_URL}/${id}`)
      .pipe(
        map(res => res as Project)
      )
  }

  public add(project: Project): any {
    return this.http
      .post(`${PROJECTS_API_URL}`, project)
  }

  public edit(project: Project): any {
    return this.http
      .put(`${PROJECTS_API_URL}/${project._id}`, project)
  }

  public remove(id: string | undefined): any {
    return this.http
      .delete(`${PROJECTS_API_URL}${id}`)
  }
}
