import { Component } from '@angular/core';
import { menuItems } from './../../data/menu-items.data';
import { MenuItem } from "./../../models/menu-item.model";

@Component({
  selector: 'app-home',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {

  public menuItems: MenuItem[] = menuItems;

  constructor() {}
}
