import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogserviceService {

  getProduct$: Observable<any>;
  private getProductSubject = new Subject<any>();
  constructor(private webService: WebserviceService) { }

  getCatalog(){

    return this.webService.get(`styleCatalog`);
  }

  createCatalog(wear_type:string , color: string , price : number, imgId: string, titleName : string, sizeCount : any){
    return this.webService.post('styleCatalog',{wear_type,color,price,imgId,titleName,sizeCount});
  }


  getType(wearType:string){

    return this.webService.get(`styleCatalog/${wearType}`);
  }

  getProduct(productView : any){

    // console.log(productView);
    this.getProductSubject.next(productView);

  }
}
