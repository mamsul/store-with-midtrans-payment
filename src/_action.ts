import { HttpService } from '@/service';
import { IProduct } from './types/models';

const http = new HttpService();

export async function fetchAllProducts() {
  const res = http.get<IProduct[]>('/products?limit=5');
  return res;
}

export async function fetchProductById(id: string) {
  const res = http.get<IProduct>(`/products/${id}`);
  return res;
}

export async function fetchAllCategories() {
  const res = http.get<string[]>('/products/categories');
  return res;
}
