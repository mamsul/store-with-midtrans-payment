import { cn } from '@/lib/utils';
import React from 'react';

type ProductButtonProps = {
  variant?: 'default' | 'highlight';
  children: React.ReactNode;
  handleClick?: () => void;
};

const ProductButton = ({
  children,
  handleClick,
  variant = 'default',
}: ProductButtonProps) => {
  const styleVariant = {
    default: 'border border-gray-500 hover:border-gray-800',
    highlight: 'bg-gray-800 text-white',
  };
  return (
    <button
      className={cn(
        'inline-flex h-full w-full items-center justify-center rounded-md transition-all duration-300 hover:scale-105',
        styleVariant[variant],
      )}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default ProductButton;
