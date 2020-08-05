import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main-section',
  templateUrl: './home-main-section.component.html',
  styleUrls: ['./home-main-section.component.css']
})
export class HomeMainSectionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  checkSession(){
    if (sessionStorage.length == 0){
      
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/dashboard'])
    }
  }
}
