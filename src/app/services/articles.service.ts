import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const ARTICLES_API_URL: string = `${environment.API_ROOT}articles/`;

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Article[]> {
    return this.http.get(`${ARTICLES_API_URL}`)
      .pipe(
        map(res => res as Article[])
      )
  }

  public getById(id: string): Observable<Article> {
    return this.http.get(`${ARTICLES_API_URL}/${id}`)
      .pipe(
        map(res => res as Article)
      )
  }

  public add(article: Article): any {
    return this.http
      .post(`${ARTICLES_API_URL}`, article)
  }

  public edit(article: Article): any {
    return this.http
      .put(`${ARTICLES_API_URL}/${article._id}`, article)
  }

  public remove(id: string | undefined): any {
    return this.http
      .delete(`${ARTICLES_API_URL}${id}`)
  }
}
