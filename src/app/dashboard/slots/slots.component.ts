import { Component, OnInit } from '@angular/core';
import { Locations } from '../../models/locations.model';
import { LocationsService } from 'src/app/services/locations.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  locations$: Locations[];
  vehicles$: Vehicle[];
  sessionValue : string = "";

  constructor(
    private locationsService: LocationsService,
    private vehicleService: VehicleService,
    private dashboardComponent: DashboardComponent) { }

  ngOnInit() {
    this.dashboardComponent.checkLogin();
    this.loadLocations();
    this.loadVehicle();
    
  }

  loadLocations(){
    return this.locationsService.getLocations()
    .subscribe(data => this.locations$ = data)
  }

  loadVehicle(){
    return this.vehicleService.getVehicles()
    .subscribe(data => this.vehicles$ = data)
  }
}
