import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { UploadImagesService } from 'src/app/services/upload-images.service';
import { Article } from './../../../../models/article.model';
import { AlertService } from "./../../../../services/alert.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})

export class ArticlesDetailsComponent implements OnInit {

  public article: Article = new Article();
  public submitted: boolean = false;
  public loading: boolean = false;
  public errorMessage: string = '';
  public newImage: FormData = new FormData;
  private id: string = "";
  public isLoading: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private uploadImagesService: UploadImagesService
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.id = id;
    if(id === 'new') return;
    this.getById(id);
  }

  public submitHandler(): void {
    if(this.isLoading) return;
    if(this.id === 'new') this.addArticle(this.article)
    else this.editArticle(this.article)
  }

  private getById(id: string):void {
    this.articlesService.getById(id).subscribe((article: Article) => {
      this.article = article;
    })
  }

  private addArticle(article: Article): void {
    this.isLoading = true;
    this.articlesService.add(article).subscribe((_res: any) => {
      this.isLoading = false;
      this.alertService.success('Article has been Added');
      this.router.navigate(['/articles/list']);
    });
  }

  private editArticle(article: Article): void {
    this.isLoading = true;
    this.articlesService.edit(article).subscribe((article: any) => {
      this.isLoading = false;
      this.article = article;
      this.alertService.success('Article has been Edited');
    });
  }

  public imageLoaded(data: FormData): void {
    this.uploadImage(data);
  }

  private uploadImage(data: FormData): void {
    this.isLoading = true;
    this.uploadImagesService.upload(data)
      .subscribe((data: any) => {
        this.isLoading = false;
        this.article.image = data.location;
      });
  }

  // private errorHandler(error: string): void {
  //   this.error = true;
  //   this.errorMessage = error;
  // }

}
