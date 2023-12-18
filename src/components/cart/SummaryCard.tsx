'use client';

import useStore from '@/hooks/useStore';
import { formatToIDR } from '@/lib/utils';
import { productStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import SummaryItem from './SummaryItem';

const SummaryCard = () => {
  const router = useRouter();
  const carts = useStore(productStore, (state) => state.carts);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const calculateTotal = () => {
      const subtotal = carts?.reduce((acc, product) => {
        return acc + parseFloat(product.price) * product.count;
      }, 0);
      return subtotal ?? 0;
    };

    const countItems = () => {
      const totalItems = carts?.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.count;
      }, 0);
      return totalItems ?? 0;
    };

    setSubtotal(calculateTotal());
    setTotalItems(countItems());
  }, [carts]);

  const shippingCost: number = 0;
  const taxCost: number = 0;
  const discount: number = 0;

  const total: number = subtotal + shippingCost + taxCost + discount;

  return (
    <div className="flex h-max w-full flex-col space-y-6 pr-2">
      <div className="flex flex-col space-y-3 text-gray-700">
        <SummaryItem
          label={`Subtotal (${totalItems} items)`}
          value={formatToIDR(subtotal)}
        />
        <SummaryItem label="Shipping Cost" value={formatToIDR(shippingCost)} />
        <SummaryItem label="Tax" value={formatToIDR(taxCost)} />
        <SummaryItem label="Discount" value={formatToIDR(discount)} />
      </div>

      <div className="flex flex-col space-y-3 border-t border-gray-400 py-5 text-gray-900">
        <span className="inline-flex items-center justify-between font-semibold">
          Total <span>{formatToIDR(total)}</span>
        </span>
      </div>

      <div className="h-12">
        {total > 0 && (
          <Button
            variant="highlight"
            onClick={() => router.push('/checkout')}
            disabled={total === 0}>
            <span>Checkout</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
