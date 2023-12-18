'use client';

import { formatToIDR } from '@/lib/utils';
import { ICartProduct } from '@/types/models';
import Image from 'next/image';
import Link from 'next/link';

type OrderItemProps = {
  cart: ICartProduct;
};

const OrderItem = ({ cart }: OrderItemProps) => {
  return (
    <div className="flex h-24 w-full gap-4 bg-gray-50/30">
      <div className="flex h-24 w-3/12 items-center justify-center rounded-l-lg bg-white p-3">
        <div className="relative h-full w-full">
          <Image
            alt={`Product ${cart.title}`}
            src={cart.image}
            fill
            sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
            quality={80}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="flex w-9/12 flex-col justify-between py-2 pr-5">
        <div className="flex h-full flex-col">
          <Link
            href={`/product/${cart.id}`}
            className="max-w-sm text-sm font-semibold text-gray-700">
            {cart.title}
          </Link>

          <span className="mt-2 inline-flex items-center gap-2 text-lg font-medium">
            {formatToIDR(parseFloat(cart.price))}{' '}
            <span className="text-gray-500">x {cart.count}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
