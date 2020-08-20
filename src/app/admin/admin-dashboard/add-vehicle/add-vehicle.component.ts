import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicles$ : Vehicle[];
  form = new FormGroup({
    vehicle_type : new FormControl('', Validators.required),
    cost : new FormControl('', Validators.required)
  })
  constructor(private vehicleservice : VehicleService) { }

  ngOnInit(): void {
    this.loadVehicle();
  }

  loadVehicle(){
    this.vehicleservice.getVehicles()
    .subscribe(data => this.vehicles$ = data) 
  }

  onSubmit(){
    this.vehicleservice.addVehicle(JSON.stringify(this.form.value))
    .subscribe(data => console.log(data))
    alert('Vehicle Added')
    location.reload();
  }
}
