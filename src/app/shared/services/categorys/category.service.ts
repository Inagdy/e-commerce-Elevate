import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AdaptallcategoryService } from './adapt/adaptallcategory.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient,private _adaptallcategoryService:AdaptallcategoryService) { }


   getAllgategory():Observable<any>{
      return this._httpClient.get('https://flower.elevateegy.com/api/v1/categories').pipe(
        map((res:any)=> this._adaptallcategoryService.adaptallcategory(res)) )
      
    }
}
