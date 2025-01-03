import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  user:any
  pass:any

  fb = inject(FormBuilder)
  router = inject(Router)
  http = inject(HttpClient)
  authService = inject(AuthService)

  wlist:string[] = ["Sample Task", "LOGIN"]

  loginForms = this.fb.nonNullable.group({
    email:['', Validators.minLength(4)],
    password:['', Validators.minLength(6)]
  })

  get email(){
    return this.loginForms.get('admin')
  }

  get password(){
    return this.loginForms.get('password')
  }

  errorMessage: string | null = null

  auth():void {
    const rawForm = this.loginForms.getRawValue()
    this.authService
    .login(rawForm.email, rawForm.password)
    .subscribe({
      next: ()=>{
      this.router.navigateByUrl('/Home');
      },
      error: (err)=>{
        this.errorMessage = err.code;
      }
    })
  }
  //   if(this.user == "Blezin" && this.pass == "testPass") {
  //     this.router.navigate(['Home'])
  //   } 
  //   else {
  //     console.log("Form is invalid")
  //     alert('Please Enter Correct UserName or Password')
  //   }
  // }
  // ngOnInit(): void {
  // }
}
