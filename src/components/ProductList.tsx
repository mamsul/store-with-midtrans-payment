import { cn } from '@/lib/utils';
import { IProduct } from '@/types/models';
import ProductItem from './ProductItem';

type ProductListProps = {
  className?: string;
  products: IProduct[];
};

const ProductList = ({ className = '', products }: ProductListProps) => {
  return (
    <div className={cn('flex flex-row space-x-8', className)}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
