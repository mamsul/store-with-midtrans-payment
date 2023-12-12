'use client';

import ProductButton from './ProductButton';

type ProductItemCheckoutBtnProps = {
  className?: string;
};

const ProductItemCheckoutBtn = ({ className }: ProductItemCheckoutBtnProps) => {
  return (
    <div className={`h-10 w-full ${className}`}>
      <ProductButton
        variant="highlight"
        handleClick={() => alert('checkout fn')}>
        <span className="text-sm">Checkout Now</span>
      </ProductButton>
    </div>
  );
};

export default ProductItemCheckoutBtn;
