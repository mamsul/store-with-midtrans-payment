'use client';

import useStore from '@/hooks/useStore';
import { productStore } from '@/store';
import { ICustomer, IItemDetail, IProductCheckout } from '@/types/models';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { InputField } from '../form/InputField';
import { TextAreaField } from '../form/TextAreaField';

const OrderForm = () => {
  const router = useRouter();
  const productState = useStore(productStore, (state) => state);
  const carts = productState?.carts ?? [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mappingProducts: IItemDetail[] = carts.map((item) => ({
    id: item.id,
    name: item.title?.substring(0, 50),
    price: parseFloat(item.price),
    quantity: item.count,
  }));

  const handlePayment = async (customer: ICustomer) => {
    setIsLoading(true);
    const payload: IProductCheckout = {
      customer,
      products: mappingProducts,
    };

    try {
      const res = await fetch('/api/midtrans', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const resData = await res.json();
      reset();
      (window as any).snap.pay(resData.token);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      alert('Something Wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitForm = async (data: FieldValues) => {
    const customerData: ICustomer = {
      firstName: data.firstname,
      lastName: data.lastname,
      phone: data.phone,
      address: data.address,
    };

    handlePayment(customerData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InputField
              id="firstname"
              label="First Name"
              {...register('firstname', {
                required: 'First Name must be filled',
              })}
              errors={errors.firstname?.message as string}
            />
            <InputField
              id="lastname"
              label="Last Name"
              {...register('lastname', {
                required: 'Last Name must be filled',
              })}
              errors={errors.lastname?.message as string}
            />
          </div>
          <InputField
            id="phone"
            label="Phone Number"
            {...register('phone', {
              required: 'Phone Number must be filled',
            })}
            errors={errors.phone?.message as string}
          />

          <TextAreaField
            id="address"
            label="Complete Address"
            {...register('address', {
              required: 'Address must be filled',
            })}
            errors={errors.address?.message as string}
          />
        </div>
        {carts && carts.length > 0 && (
          <div className="mt-10 grid h-12 grid-cols-2 gap-5">
            <Button variant="highlight">
              <span>{isLoading ? 'Please wait...' : 'Pay Now'}</span>
            </Button>
            <Button
              variant="default"
              type="button"
              onClick={() => router.push('/cart')}>
              <span>Cancel</span>
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default OrderForm;
