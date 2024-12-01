import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  user:any
  pass:any
  yo:any

  fb = inject(FormBuilder)
  router = inject(Router)
  http = inject(HttpClient)
  authService = inject(AuthService)

  wlist:string[] = ["Sample Task", "Register"]

  loginForms = this.fb.nonNullable.group({
    email:['', Validators.minLength(4)],
    username:['', Validators.required],
    password:['', Validators.minLength(6)]
  })

  get email(){
    return this.loginForms.get('email')
  }

  get username(){
    return this.loginForms.get('username')
  }

  get password(){
    return this.loginForms.get('password')
  }

  errorMessage: string | null = null;

  auth():void {
    const rawForm = this.loginForms.getRawValue()
    this.authService
    .signup(rawForm.email, rawForm.username, rawForm.password)
    .subscribe(()=>{
      this.router.navigateByUrl('/Home');
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
