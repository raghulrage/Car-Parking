import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Locations } from '../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  apiUrl = 'http://localhost:8080/locations';

  constructor(private _http: HttpClient) { }

  getLocations(){
    return this._http.get<Locations[]>(this.apiUrl);
  }

  addLocation(location){
    return this._http.post<Boolean>(this.apiUrl+'/add', location, this.httpOptions ); 
  }
}
