import { Component, OnInit, Input } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SlotsService } from 'src/app/services/slots.service';
import { Slots } from 'src/app/models/slots.model';
@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {

    vehicles$: Vehicle[];
    slots$: Slots[];
    locationid = this.actRoute.snapshot.params['locationid'];

  @Input() bookingdetails = {
    'email':'',
    'fullname':'',
    'locationid':'',
    'vehicle_type':'',
    'duration':0,
    'time':'',
    'slotid':'',
    'date':'',
    'vehicle_no':''
  }

  constructor(
    private bookings:BookingsService, 
    private slotsService: SlotsService, 
    private vehicleService: VehicleService, 
    public actRoute :ActivatedRoute, 
    public router: Router) { }

  ngOnInit(): void {
    this.getVehicles();
    this.getSlotById();
  }

  getVehicles(){
    return this.vehicleService.getVehicles()
    .subscribe(data => this.vehicles$ = data)
    
  }
  getSlotById(){
    return this.slotsService.getSlotById(this.locationid)
    .subscribe(data => this.slots$ = data)
  }

  addBooking(){
    this.bookings.addBooking(this.locationid, this.bookingdetails)
    .subscribe((data:{}) => {
      alert('Slot Booked');
      this.router.navigate(['/dashboard'])
    })
  }
}
