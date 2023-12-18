'use client';

import useStore from '@/hooks/useStore';
import { productStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import CartItem from './CartItem';

const CartList = () => {
  const carts = useStore(productStore, (state) => state.carts);
  if (carts && carts.length < 1) {
    return (
      <div className="flex h-96 flex-col items-center justify-center">
        <div className="relative h-64 w-full border-2 border-none bg-transparent">
          <Image
            alt="undraw empty data"
            src="/undraw-empty.svg"
            fill
            sizes="(max-width: 24px) 100vw, 50vw, 33vw"
            quality={80}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <span className="mt-10 text-lg text-gray-600">
          You do not have any product on cart!,{' '}
          <Link href="/" className="text-gray-900 underline underline-offset-2">
            explore now!
          </Link>
        </span>
      </div>
    );
  }

  return carts?.map((item) => {
    return <CartItem key={item.id} cart={item} />;
  });
};

export default CartList;
