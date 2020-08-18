import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  logout(){
    sessionStorage.clear()
    this.route.navigate(['admin'])
  }

  checkLogin(){
    if (sessionStorage.length == 0){
      this.route.navigate(['admin'])
    }
  }
}
