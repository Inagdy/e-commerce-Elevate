import { Injectable } from '@angular/core';

import { poularproduct } from '../../../../interfaces/product/poularproduct';
import { allProduct } from '../../../../interfaces/allproduct/allproduct';
import { Allproduct } from '../../../../interfaces/allproducts/all-categorys';



@Injectable({
  providedIn: 'root',
})
export class AdaptallproductService {
  constructor() {}

  adaptallproductService(data: Allproduct):poularproduct {
return {
product:data.products.map((res:allProduct)=>({
       id:res._id,
       title:res.title,
       slug:res.slug,
       description:res.description,
       imgCover:res.imgCover,
       images:res.images,
       price:res.price,
       priceAfterDiscount:res.priceAfterDiscount,
       sold:res.sold,
       discount:res.discount,
  
  }))
}

 


  }
}
