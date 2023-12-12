import Midtrans from 'midtrans-client';
import { NextResponse } from 'next/server';

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET_KEY,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
});

export async function POST(request) {
  const { id, title, price, quantity } = await request.json();

  const parameter = {
    transaction_details: {
      order_id: id,
      gross_amount: price * quantity,
    },
    item_details: [
      {
        id: id,
        price: price,
        quantity: quantity,
        name: title,
      },
    ],
  };

  const token = await snap.createTransactionToken(parameter);

  console.log({ token });

  return NextResponse.json({ token });
}
