export interface poularproduct {
    product: Product[]
  }
  
  export interface Product {
    id: string
    title: string
    slug: string
    description: string
    imgCover: string
    images: string[]
    price: number
    priceAfterDiscount: number
    sold: number
    discount: number
  }
  