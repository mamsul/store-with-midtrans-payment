'use client';

import useStore from '@/hooks/useStore';
import { productStore } from '@/store';
import OrderItem from './OrderItem';

const OrderList = () => {
  const carts = useStore(productStore, (state) => state.carts);

  if (carts && carts.length < 1) {
    return <span>No product available!</span>;
  }

  return carts?.map((item) => {
    return <OrderItem key={item.id} cart={item} />;
  });
};

export default OrderList;
