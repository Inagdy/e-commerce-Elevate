import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';


import { AdaptallproductService } from './adapt/adaptcatogres/adaptallcatogres.service';
import { poularproduct } from '../../interfaces/product/poularproduct';
import { Allproduct } from '../../interfaces/allproducts/all-categorys';
import { Allcatogory } from '../../interfaces/allcatogory/allcatogory';
import { AllProductsRes } from '../../interfaces/allproduct/allproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient,private _adaptallproductService:AdaptallproductService) { }


  getAllpoularproduct(keword:string =''):Observable<poularproduct>{
    return this._httpClient.get<Allproduct>(`https://flower.elevateegy.com/api/v1/products?keyword=${keword}`).pipe(
      map((res:Allproduct)=> this._adaptallproductService.adaptallproductService(res) ),
      catchError((error:any)=>{
        return throwError(error)
      })
    );
  }
  getAllproducts(page:number , limit:number = 10):Observable<AllProductsRes>{
    return this._httpClient.get<AllProductsRes>(`https://flower.elevateegy.com/api/v1/products?page=${page}&limit=${limit}`);
  }


}
