import { cn } from '@/lib/utils';
import ProductItem from './ProductItem';

type ProductListProps = {
  className?: string;
};

const ProductList = ({ className = '' }: ProductListProps) => {
  return (
    <div className={cn('flex flex-row space-x-8', className)}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
