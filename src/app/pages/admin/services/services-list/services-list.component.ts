import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from './../../../../models/service.model';
import { AlertService } from "./../../../../services/alert.service";

@Component({
  selector: 'app-services',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})

export class ServicesListComponent implements OnInit {

  public services: Service[] = [];

  constructor(
    private servicesService: ServicesService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll():void {
    this.servicesService.getAll()
      .subscribe(services => {
        this.services = services;
      })
  }

  public deleteHandler(service: Service):void {
    if(!confirm(`Are you sure you want to remove service ${service.title}?`)) return;
    this.servicesService.remove(service._id)
      .subscribe((_res: any) => {
        this.deleteLocally(service._id);
        this.alertService.success(`Service ${service.title} has been successfully removed`);
      })
  }

  private deleteLocally(id: any): void {
    const services = this.services.filter(service => service._id !== id);
    this.services = services;
  }

}
