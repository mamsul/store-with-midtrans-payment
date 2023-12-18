import Image from 'next/image';

type ProductDetailImageProps = {
  image: string;
};

const ProductDetailImage = ({ image }: ProductDetailImageProps) => {
  return (
    <div className="relative h-full w-full border-2 border-none bg-transparent">
      <Image
        alt="product"
        priority
        src={image}
        fill
        sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
        quality={85}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default ProductDetailImage;
