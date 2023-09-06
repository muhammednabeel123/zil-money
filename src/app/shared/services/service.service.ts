
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/interface/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  api = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json'
  getUserData():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.api)
  }
}
