export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'footwear';
  image: string;
  description: string;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SaleData {
  date: string;
  amount: number;
  category: string;
}

export interface Settings {
  theme: 'light' | 'dark';
  notifications: boolean;
  currency: 'INR' | 'USD';
}