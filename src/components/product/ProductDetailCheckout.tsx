'use client';

import { productStore } from '@/store';
import { IProduct } from '@/types/models';
import { CircleDollarSign, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../Button';

type ProductCheckoutProps = {
  product: IProduct;
};

const ProductDetailCheckout = ({ product }: ProductCheckoutProps) => {
  const router = useRouter();
  const { addToCart } = productStore();

  const handleCheckout = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="flex h-14 w-full items-center space-x-6">
      <div className="h-full w-1/2">
        <Button onClick={() => addToCart(product)}>
          <ShoppingCart className="me-3 h-5 w-5" /> Add to Cart
        </Button>
      </div>
      <div className="h-full w-1/2">
        <Button variant="highlight" onClick={handleCheckout}>
          <CircleDollarSign className="me-3 h-5 w-5" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailCheckout;
