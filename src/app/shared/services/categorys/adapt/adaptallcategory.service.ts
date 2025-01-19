import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdaptallcategoryService {

  constructor() { }

  adaptallcategory(data:any){
    return data.categories
    
  }
}
