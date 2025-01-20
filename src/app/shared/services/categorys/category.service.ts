import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AdaptallcategoryService } from './adapt/adaptallcategory.service';
import { Catogoryadapt_i } from '../../interfaces/catogoryadpat/catogoryadapt';
import { Allcatogory } from '../../interfaces/allcatogory/allcatogory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient,private _adaptallcategoryService:AdaptallcategoryService) { }


   getAllgategory():Observable<Catogoryadapt_i>{
      return this._httpClient.get<Allcatogory>('https://flower.elevateegy.com/api/v1/categories').pipe(
        map((res:Allcatogory)=> this._adaptallcategoryService.adaptallcategory(res)) )
      
    }
}
