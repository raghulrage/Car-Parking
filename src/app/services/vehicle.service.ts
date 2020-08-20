import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = 'http://localhost:8080/vehicle';

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  constructor(private _http: HttpClient) { }

  getVehicles(){
    return this._http.get<Vehicle[]>(this.apiUrl);
  }

  addVehicle(vehicle){
    return this._http.post<Vehicle>(this.apiUrl+'/add', vehicle, this.httpOptions)
  }
}
