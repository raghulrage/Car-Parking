import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form = new FormGroup({
    adminid : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  constructor(private route : Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    var loginJson = JSON.stringify(this.form.value);
    this.adminService.loginCheck(loginJson)
    .subscribe((data => {
      if(data == true){
      alert("Login successful");
      var jsonData = JSON.parse(loginJson);
      this.storeLogin(jsonData['email']);
      this.route.navigate(['/admin-dashboard']);
      
      }
      else{
        alert("Invalid Login"); 
      }
    }))
  }

  storeLogin(email){
    sessionStorage.setItem('admin',email);
  }
}
