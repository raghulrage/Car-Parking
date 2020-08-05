import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locations } from '../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  apiUrl = 'http://localhost:8080/locations';

  constructor(private _http: HttpClient) { }

  getLocations(){
    return this._http.get<Locations[]>(this.apiUrl);
  }
}
