'use client';

import useStore from '@/hooks/useStore';
import { cn } from '@/lib/utils';
import { productStore } from '@/store';
import { ShoppingCart } from 'lucide-react';

const NavCart = () => {
  const carts = useStore(productStore, (state) => state.carts);

  const cartCount = () => {
    if (carts && carts.length < 1) return null;
    return (
      <div
        className={cn(
          'absolute -left-2 -top-2 flex h-4 w-4 items-center',
          'justify-center rounded-full bg-red-600',
        )}>
        <span className="text-xs text-white">{carts?.length}</span>
      </div>
    );
  };

  return (
    <div className="relative">
      {cartCount()}
      <ShoppingCart className="h-5 w-5 cursor-pointer" />
    </div>
  );
};

export default NavCart;
