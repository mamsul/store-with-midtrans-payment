'use client';

import { productStore } from '@/store';
import { Minus, Plus } from 'lucide-react';

type CounterProps = {
  id: number;
  countVal: number;
};

const Counter = ({ countVal, id }: CounterProps) => {
  const { updateProductCount } = productStore();

  return (
    <div className="flex h-9 w-24 items-center justify-between border border-gray-600 px-2">
      <button>
        <Minus
          className="h-4 w-4"
          onClick={() => updateProductCount({ id, type: 'dec' })}
        />
      </button>
      <span className="text-base font-semibold">{countVal}</span>
      <button>
        <Plus
          className="h-4 w-4"
          onClick={() => updateProductCount({ id, type: 'inc' })}
        />
      </button>
    </div>
  );
  <Minus />;
};

export default Counter;
