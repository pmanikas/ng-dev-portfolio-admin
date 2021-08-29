import { Component, Input } from "@angular/core";
import { MenuItem } from "./../../models/menu-item.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})

export class SidebarComponent {

  @Input() menuItems: MenuItem[] = [];

  constructor() {}

}
