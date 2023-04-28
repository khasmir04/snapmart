type Category =
  | 'groceries'
  | 'cloths'
  | 'lifestyle'
  | 'toys'
  | 'furniture'
  | 'gadgets'
  | 'automotive';

export interface Product {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: Category;
}

export interface CartProduct extends Product {
  quantity: number;
}
