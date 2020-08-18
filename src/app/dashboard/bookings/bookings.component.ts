import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/models/bookings.model';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  show: boolean;
  email$ =  sessionStorage.getItem('email');
  bookings$: Bookings[] = [];

  constructor(private bookingsService: BookingsService, 
    public router: Router) { }

  ngOnInit() {
    this.checkLogin();
    this.getBookingById();
    
  }

  getBookingById(){
    return this.bookingsService.getBookings(this.email$)
    .subscribe(data => {this.bookings$ = data, this.checkBookingFn();})
  }

  endBooking(bookingid){
    return this.bookingsService.endBooking(bookingid)
    .subscribe((data:{}) => {
      alert('Booking Ended');
      location.reload();
      this.router.navigate(['dashboard/bookings'])
    })
  }
  checkBookingFn(){
    console.log()
    if (this.bookings$.length == 0){
      this.show = true
    }
    else{
      this.show = false
    }
  }

  checkLogin(){
    if (sessionStorage.length == 0){
      this.router.navigate(['login']);
    }
  }

}
