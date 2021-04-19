import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const SERVICES_API_URL: string = `${environment.API_ROOT}services/`;

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Service[]> {
    return this.http.get(`${SERVICES_API_URL}`)
      .pipe(
        map(res => res as Service[])
      )
  }

  public getById(id: string): Observable<Service> {
    return this.http.get(`${SERVICES_API_URL}/${id}`)
      .pipe(
        map(res => res as Service)
      )
  }

  public add(service: Service): any {
    return this.http
      .post(`${SERVICES_API_URL}`, service)
  }

  public edit(service: Service): any {
    return this.http
      .put(`${SERVICES_API_URL}/${service._id}`, service)
  }

  public remove(id: string | undefined): any {
    return this.http
      .delete(`${SERVICES_API_URL}${id}`)
  }
}
