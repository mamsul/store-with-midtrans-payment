'use client';

import useStore from '@/hooks/useStore';
import { formatToIDR } from '@/lib/utils';
import { productStore } from '@/store';
import SummaryItem from '../cart/SummaryItem';

const OrderSummary = () => {
  const prdcStore = useStore(productStore, (state) => state);
  const subTotal = prdcStore?.getSubtotalProductCart() ?? 0;
  const totalItems = prdcStore?.getTotalItemsProductCart() ?? 0;
  const shippingCost: number = 0;
  const taxCost: number = 0;
  const discount: number = 0;

  const total: number = subTotal + shippingCost + taxCost + discount;

  return (
    <>
      <div className="flex flex-col space-y-3 text-gray-700">
        <SummaryItem
          label={`Subtotal (${totalItems} items)`}
          value={formatToIDR(subTotal)}
        />
        <SummaryItem label="Shipping Cost" value={formatToIDR(shippingCost)} />
        <SummaryItem label="Tax" value={formatToIDR(taxCost)} />
        <SummaryItem label="Discount" value={formatToIDR(discount)} />
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-gray-400 pt-5">
        <span className="text-xl font-semibold text-gray-700">Total</span>
        <span className="text-xl font-bold text-gray-900">
          {formatToIDR(total)}
        </span>
      </div>
    </>
  );
};

export default OrderSummary;
