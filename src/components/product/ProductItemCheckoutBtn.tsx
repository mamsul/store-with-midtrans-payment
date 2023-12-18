'use client';

import { Button } from '../Button';

type ProductItemCheckoutBtnProps = {
  className?: string;
};

const ProductItemCheckoutBtn = ({ className }: ProductItemCheckoutBtnProps) => {
  return (
    <div className={`h-10 w-full ${className}`}>
      <Button variant="highlight" onClick={() => alert('checkout fn')}>
        <span className="text-sm">Checkout</span>
      </Button>
    </div>
  );
};

export default ProductItemCheckoutBtn;
