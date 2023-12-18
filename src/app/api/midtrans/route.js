import Midtrans from 'midtrans-client';
import { NextResponse } from 'next/server';

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET_KEY,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
});

export async function POST(request) {
  const { customer, products } = await request.json();
  const dateNow = Date.now();

  const grossAmount = products?.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const parameter = {
    transaction_details: {
      order_id: `order-${dateNow}`,
      gross_amount: grossAmount,
    },
    item_details: products,
    customer_details: {
      first_name: customer?.firstName ?? '',
      last_name: customer?.lastName ?? '',
      phone: customer?.phone ?? '',
    },
    shipping_address: {
      first_name: customer?.firstName ?? '',
      last_name: customer?.lastName ?? '',
      email: customer?.email ?? '',
      phone: customer?.phone ?? '',
      address: customer?.address ?? '',
    },
  };

  const token = await snap.createTransactionToken(parameter);

  return NextResponse.json({ token });
}
