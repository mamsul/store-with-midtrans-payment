import OrderForm from '@/components/checkout/OrderForm';
import OrderList from '@/components/checkout/OrderList';
import OrderSummary from '@/components/checkout/OrderSummary';
import Script from 'next/script';

const CheckoutPage = () => {
  return (
    <>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        strategy="lazyOnload"
        data-client-key={process.env.NEXT_PUBLIC_CLIENT_KEY}
      />
      <div className="mt-10 flex h-[90%] gap-5">
        <div className="w-7/12 p-5">
          <div className="flex h-full flex-col space-y-8">
            <div className="h-3/12">
              <h2 className="text-2xl font-semibold text-gray-700">
                Customer Identity
              </h2>
            </div>
            <div className="h-9/12 overflow-auto">
              <OrderForm />
            </div>
          </div>
        </div>
        <div className="w-5/12 rounded-r-lg border-l border-gray-400 p-5">
          <div className="flex h-full w-full flex-col space-y-8">
            <div className="h-3/12">
              <h2 className="text-2xl font-semibold text-gray-700">
                Your Order
              </h2>
            </div>
            <div className="h-9/12 flex flex-col space-y-7 overflow-auto">
              <div className="flex flex-col space-y-2">
                <OrderList />
              </div>

              <div className="border-t border-gray-400 pt-5">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
