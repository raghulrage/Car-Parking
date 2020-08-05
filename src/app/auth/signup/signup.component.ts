import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    fullname : new FormControl('', Validators.required),
    mobno : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confPassword : new FormControl('',Validators.required)
  })

  constructor(private usersService: UsersService,  public router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }
  onSubmit(){
    var loginJson = JSON.stringify(this.form.value);
    this.usersService.signup(loginJson)
    .subscribe((data => {
      if(data == true){
      alert("Signup successful");
      var jsonData = JSON.parse(loginJson);
      this.storeLogin(jsonData['email']);
      this.router.navigate(['/dashboard']);
      
      }
      else{
        alert("User Already Exist"); 
      }
    }))
  }

  storeLogin(email){
    sessionStorage.setItem("email", email); 
  }

  checkLogin(){
    if (sessionStorage.length != 0){
      this.router.navigate(['/']);
    }
  }

}
