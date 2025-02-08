export interface allProduct {
    _id: string
    title: string
    slug: string
    description: string
    imgCover: string
    images: string[]
    price: number
    priceAfterDiscount: number
    quantity: number
    category: string
    occasion: string
    createdAt: string
    updatedAt: string
    __v: number
    discount: number
    sold: number
    id: string
  }
  export interface AllProductsRes {
    message: string
    metadata: ProductsMetadata
    products: allProduct[]
  }
  
  export interface ProductsMetadata {
    currentPage: number
    limit: number
    totalPages: number
    totalItems: number
    nextPage:number
  }