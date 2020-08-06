import { Component, OnInit } from '@angular/core';
import {CatalogserviceService} from "../services/catalogservice.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { cartCatalog } from '../shared/clothes-list.model';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/app-state.model';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent implements OnInit {
  items: Observable<Array<cartCatalog>>;
  length = 0;
  jobsOutput :any [];
  public jt: any [];
  type : string = '';
  constructor(private myService: CatalogserviceService,
    private route: ActivatedRoute,private router:Router,private store: Store<AppState>) { }
    // ,{relativeTo: this.route}
  onStyleClick(event : any){
    this.type = event.target.textContent;
    this.router.navigate(['men'],{state: {data: this.type}});
    // this.myService.getType(this.type).subscribe( 
    //   // res => {
    //   //   let temparr = new Array();
    //   //   temparr.push(res.valueOf());
    //   //   console.log(temparr);

    //   //   },
        
    //   );

    // console.log(this.type);

  }
  // onEditRecipe(){
  //   this.router.navigate(['edit'],{relativeTo: this.route});
  //   //this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  //  }

  ngOnInit(): void {

    let total = 0;
    //var keys = Object.keys(this.items);
    this.store.select('cart').subscribe(d =>{
      
      let keys = Object.keys(d);
      console.log(keys)
      total = keys.length;
      if(total > 0){
        this.length = total;  
      }
      console.log("length");
      console.log(this.length);
      
      
    });
    
   }

}
