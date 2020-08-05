import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

  }
}
