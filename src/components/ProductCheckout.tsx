'use client';

import { ICheckout, IProduct } from '@/types/models';
import { CircleDollarSign, ShoppingCart } from 'lucide-react';
import ProductButton from './ProductButton';

type ProductCheckoutProps = {
  product: IProduct;
};

const ProductCheckout = ({ product }: ProductCheckoutProps) => {
  const handleChecout = async () => {
    const payload: ICheckout = {
      id: product.id,
      price: parseFloat(product.price),
      title: product.title,
      quantity: 1,
    };

    const res = await fetch('/api/midtrans', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const resData = await res.json();

    (window as any).snap.pay(resData.token);
  };

  return (
    <div className="flex h-14 w-full items-center space-x-6">
      <div className="h-full w-1/2">
        <ProductButton handleClick={() => alert('add to chart')}>
          <ShoppingCart className="me-3 h-5 w-5" /> Add to Cart
        </ProductButton>
      </div>
      <div className="h-full w-1/2">
        <ProductButton variant="highlight" handleClick={handleChecout}>
          <CircleDollarSign className="me-3 h-5 w-5" />
          Checkout Now
        </ProductButton>
      </div>
    </div>
  );
};

export default ProductCheckout;
