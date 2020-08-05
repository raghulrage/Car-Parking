import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slots } from '../models/slots.model';
@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  apiUrl = 'http://localhost:8080'


  constructor(private _http: HttpClient) { }

  getSlotById(locationid){
    return this._http.get<Slots[]>(this.apiUrl+'/slots/getbyid/'+locationid);
  }
}
