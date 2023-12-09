import Image from 'next/image';

const ProductDetailImage = () => {
  return (
    <div className="relative h-full w-full border-2 border-none bg-transparent">
      <Image
        alt="product"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        fill
        sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
        quality={80}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default ProductDetailImage;
