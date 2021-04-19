import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from './../../../../models/article.model';
import { AlertService } from "./../../../../services/alert.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll():void {
    this.articlesService.getAll()
      .subscribe(articles => {
        this.articles = articles;
      })
  }

  public deleteHandler(article: Article):void {
    if(!confirm(`Are you sure you want to remove article ${article.title}?`)) return;
    this.articlesService.remove(article._id)
      .subscribe((_res: any) => {
        this.deleteLocally(article._id);
        this.alertService.success(`Article ${article.title} has been successfully removed`);
      })
  }

  private deleteLocally(id: any): void {
    const articles = this.articles.filter(article => article._id !== id);
    this.articles = articles;
  }

}
