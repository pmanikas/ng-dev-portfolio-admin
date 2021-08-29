import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public submitted = false;
  public success = false;
  public error = false;
  public errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  public changeInputHandler(): void {
    this.submitted = false;
  }

  public submitHandler(): void {
    this.submitted = true;
    if (this.form.invalid) { return; }

    this.submitForm();
  }

  public reset(): void {
    this.error = false;
    this.success = false;
    this.submitted = false;
  }

  private submitForm(): void {
    const credentials = {
      username: this.fields.username.value,
      password: this.fields.password.value,
    };
    this.authService.authenticate(credentials).subscribe(
      (res: any) => {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.alertService.success('You have logged in');
        this.router.navigate([redirect]);
      },
      (error: any) => {
        if (error.status === 404) {
          this.alertService.error('Your credentials are invalid');
        } else {
          this.alertService.error('Something went wrong');
        }
      }
    );
  }

  public get fields(): any {
    return this.form.controls;
  }
}
