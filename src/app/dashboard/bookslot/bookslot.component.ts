import { Component, OnInit, Input } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SlotsService } from 'src/app/services/slots.service';
import { Slots } from 'src/app/models/slots.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {

    load : boolean;
    vehicles$: Vehicle[];
    slots$: Slots[];
    locationid = this.actRoute.snapshot.params['locationid'];
    currentDate = new Date();
    date = this.currentDate.getDate() + '-' + this.currentDate.getMonth() + '-' + this.currentDate.getFullYear()

  @Input() bookingdetails = {
    'email':'',
    'locationid':'',
    'vehicle_type':'',
    'duration':0,
    'time':'',
    'slotid':'',
    'date': this.date,
    'vehicle_no':''
  }
  constructor(
    private bookings:BookingsService, 
    private slotsService: SlotsService, 
    private vehicleService: VehicleService, 
    public actRoute :ActivatedRoute, 
    public router: Router) { }

  ngOnInit(): void {
    this.load = false;
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

    if(this.bookingdetails.vehicle_no == '' || this.bookingdetails.vehicle_type == '' || this.bookingdetails.slotid == '' || this.bookingdetails.duration == 0, this.bookingdetails.time == ''){
      alert('Kindly fill all the data')
      return
    } 
    if (!this.checkTime(this.bookingdetails.time)){
      alert("OOPS!! Try booking 2 hours earlier..")
      return
    }
    this.load = true;
    this.bookings.addBooking(this.locationid, this.bookingdetails)
    .subscribe((data:{}) => {
      alert('Slot Booked');
      this.router.navigate(['/dashboard/bookings'])
    })
  }

  checkTime(bookingTime){

  var currentTime = new Date();
  
  var ISTTime = new Date(currentTime.getTime() + (330 + currentTime.getTimezoneOffset())*60000)
  ISTTime.setHours(ISTTime.getHours()+2)
  
  var time = bookingTime.split(':')
  var h = parseInt(time[0])
  var m = parseInt(time[1])
  if (h<ISTTime.getHours() || (h == ISTTime.getHours() && m < ISTTime.getMinutes())){
      return false
  }
    return true;
  }
}
