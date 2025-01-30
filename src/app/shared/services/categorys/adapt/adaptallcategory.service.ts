import { Injectable } from '@angular/core';
import { Allcatogory } from '../../../interfaces/allcatogory/allcatogory';
import { Catogoryadapt_i } from '../../../interfaces/catogoryadpat/catogoryadapt';

@Injectable({
  providedIn: 'root'
})
export class AdaptallcategoryService {

  constructor() { }

  adaptallcategory(data:Allcatogory):Catogoryadapt_i{
    return data.categories
  }
}
