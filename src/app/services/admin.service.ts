import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl = 'http://localhost:8080/admin';

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  constructor(private _http: HttpClient) { }

  loginCheck(loginDetails){
    return this._http.post<Boolean>(this.apiUrl,loginDetails, this.httpOptions);
  }
}
