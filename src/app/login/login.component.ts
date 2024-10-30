import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  user:any
  pass:any

  wlist:string[] = ["Sample Task", "LOGIN"]

  loginForms = new FormGroup({
    admin:new FormControl('', Validators.minLength(4)),
    password:new FormControl('', Validators.minLength(6))
  })

  get admin(){
    return this.loginForms.get('admin')
  }

  get password(){
    return this.loginForms.get('password')
  }

  constructor(private router: Router) {}

  auth() {
    if(this.user == "Blezin" && this.pass == "testPass") {
      this.router.navigate(['Home'])
    } 
    else {
      console.log("Form is invalid")
      alert('Please Enter Correct UserName or Password')
    }
  }

  ngOnInit(): void {
  }

}
