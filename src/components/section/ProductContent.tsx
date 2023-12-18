'use client';

import { fetchAllProducts } from '@/_action';
import { IProduct } from '@/types/models';
import { useEffect, useState } from 'react';
import ListProductTitle from '../product/ListProductTitle';
import ProductList from '../product/ProductList';

const ProductContent = ({ category }: { category: string | unknown }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const products = await fetchAllProducts({
          category: category as string,
        });
        setProducts(products as unknown as IProduct[]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetch();
  }, [category]);

  if (isLoading) {
    return <p>Get products, please wait...</p>;
  }

  return (
    <div>
      <ListProductTitle category={category as string} />

      <div className="w-full overflow-auto">
        <ProductList
          className="mt-8 w-max overflow-auto py-3"
          products={products}
        />
      </div>
    </div>
  );
};

export default ProductContent;
