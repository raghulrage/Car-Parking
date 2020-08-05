import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = 'http://localhost:8080/vehicle';

  constructor(private _http: HttpClient) { }

  getVehicles(){
    return this._http.get<Vehicle[]>(this.apiUrl);
  }
}
