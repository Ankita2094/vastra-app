import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  readonly ROOT_URL;
  constructor(private http: HttpClient) {

    //this.ROOT_URL = "http://localhost:3000";
    //this.ROOT_URL = "https://vastra-app.herokuapp.com:3000";
   }


 get(uri: string){

    return this.http.get(`${uri}`);
   }

   post(uri: string, payload:Object){

    return this.http.post(`${uri}`,payload);
   }

  
}
