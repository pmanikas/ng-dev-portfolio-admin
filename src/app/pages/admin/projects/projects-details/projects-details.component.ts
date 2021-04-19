import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { UploadImagesService } from 'src/app/services/upload-images.service';
import { Project } from './../../../../models/project.model';
import { AlertService } from "./../../../../services/alert.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})

export class ProjectsDetailsComponent implements OnInit {

  public project: Project = new Project();
  public submitted: boolean = false;
  public loading: boolean = false;
  public errorMessage: string = '';
  public newImage: FormData = new FormData;
  private id: string = "";
  public isLoading: boolean = false;

  constructor(
    private projectsService: ProjectsService,
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
    if(this.id === 'new') this.addProject(this.project)
    else this.editProject(this.project)
  }

  private getById(id: string):void {
    this.projectsService.getById(id).subscribe((project: Project) => {
      this.project = project;
    })
  }

  private addProject(project: Project): void {
    this.isLoading = true;
    this.projectsService.add(project).subscribe((_res: any) => {
      this.isLoading = false;
      this.alertService.success('Project has been Added');
      this.router.navigate(['/projects/list']);
    });
  }

  private editProject(project: Project): void {
    this.isLoading = true;
    this.projectsService.edit(project).subscribe((project: any) => {
      this.isLoading = false;
      this.project = project;
      this.alertService.success('Project has been Edited');
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
        console.log(data);
        this.project.image = data.location;
      });
  }

  // private errorHandler(error: string): void {
  //   this.error = true;
  //   this.errorMessage = error;
  // }

}
