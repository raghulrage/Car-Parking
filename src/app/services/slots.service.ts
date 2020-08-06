import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Slots } from '../models/slots.model';
@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  apiUrl = 'http://localhost:8080'

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }

  constructor(private _http: HttpClient) { }

  getSlotById(locationid){
    return this._http.get<Slots[]>(this.apiUrl+'/slots/getbyid/'+locationid);
  }
  getAllSlots(){
    return this._http.get<Slots[]>(this.apiUrl+'/slots');
  }
  addSlot(slot){
    return this._http.post<Boolean>(this.apiUrl+'/slots/add', slot, this.httpOptions ); 
  }
  
}
