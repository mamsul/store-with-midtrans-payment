'use client';

import { productStore } from '@/store';
import { Trash2Icon } from 'lucide-react';

type CartRemoveProps = {
  id: number;
};

const CartRemove = ({ id }: CartRemoveProps) => {
  const { removeProductCart } = productStore();
  return (
    <button className="mt-2" onClick={() => removeProductCart(id)}>
      <Trash2Icon className="h-4 w-4" />
    </button>
  );
};

export default CartRemove;
