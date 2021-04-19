import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  public logoutHandler():void {
    this.authService.logout();
    this.alertService.success('Logged out');
    this.router.navigate(['/auth/login']);
  }

}
