import { HttpService } from '@/service';
import { IProduct } from './types/models';

const http = new HttpService();

export async function fetchAllProducts({ category }: { category: string }) {
  const apiURL = category
    ? `/products/category/${category}`
    : '/products?limit=4';
  const res = http.get<IProduct[]>(apiURL);
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
