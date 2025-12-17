import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { ILoginData } from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private _fb = inject(FormBuilder);

  private _auth = inject(AuthService);
  private _router = inject(Router)
  private _snackbar = inject(SnackbarService)

  initForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const loginFormVals = this.loginForm.value as ILoginData;

    const loginData: ILoginData = {
      email: loginFormVals.email.trim(),
      password: loginFormVals.password,
    };

    this._auth.login(loginData).subscribe({
      next: (res) =>{
        console.log(res)
        this._snackbar.success("Login Success")
        this._router.navigate(['dashboard'])
      },
      error: (err) => {
        console.log(err)
        this._snackbar.error("Faild to login")
      }
    })

    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
