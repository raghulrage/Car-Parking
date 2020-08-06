import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/models/bookings.model';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {

  AllBookings$ : Bookings[];

  constructor(private bookingsService : BookingsService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(){
    return this.bookingsService.getAllBookings()
    .subscribe(data => this.AllBookings$ = data)
  }

}
