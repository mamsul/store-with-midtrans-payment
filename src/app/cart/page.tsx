import CartList from '@/components/cart/CartList';
import SummaryCard from '@/components/cart/SummaryCard';

const CartPage = () => {
  return (
    <div className="mt-10 flex h-[90%] gap-5">
      <div className="w-7/12 p-5">
        <div className="flex h-full flex-col space-y-8">
          <div className="h-3/12">
            <h2 className="text-2xl font-semibold text-gray-700">Your Cart</h2>
          </div>
          <div className="h-9/12 overflow-auto">
            <div className="flex flex-col gap-5">
              <CartList />
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/12 rounded-r-lg border-l border-gray-400 p-5">
        <div className="flex h-full w-full flex-col space-y-8">
          <div className="h-3/12">
            <h2 className="text-2xl font-semibold text-gray-700">Summary</h2>
          </div>
          <div className="h-9/12 overflow-auto">
            <SummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
