import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';


import { AdaptallproductService } from './adapt/adaptcatogres/adaptallcatogres.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient,private _adaptallproductService:AdaptallproductService) { }


  getAllpoularproduct():Observable<any>{
    return this._httpClient.get('https://flower.elevateegy.com/api/v1/products').pipe(
      map((res:any)=> this._adaptallproductService.adaptallproductService(res) ),
      catchError((error:any)=>{
        return throwError(error)
      })
    );
  }


}
