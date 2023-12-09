'use client';

import { CircleDollarSign, ShoppingCart } from 'lucide-react';
import ProductButton from './ProductButton';

const ProductCheckout = () => {
  return (
    <div className="flex h-14 w-full items-center space-x-6">
      <div className="h-full w-1/2">
        <ProductButton handleClick={() => alert('add to chart')}>
          <ShoppingCart className="me-3 h-5 w-5" /> Add to Cart
        </ProductButton>
      </div>
      <div className="h-full w-1/2">
        <ProductButton
          variant="highlight"
          handleClick={() => alert('checkout')}>
          <CircleDollarSign className="me-3 h-5 w-5" />
          Checkout Now
        </ProductButton>
      </div>
    </div>
  );
};

export default ProductCheckout;
