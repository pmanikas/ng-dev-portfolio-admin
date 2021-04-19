import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "./../../models/menu-item.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})

export class SidebarComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {

  }

}
