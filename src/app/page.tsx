import ProductCategories from '@/components/ProductCategories';
import ProductList from '@/components/ProductList';

const categories: string[] = [
  'Bags',
  'Hat',
  'T-Shirt',
  'Long Pants',
  'Short Pants',
  'Carrier',
  'Tent',
  'Pole',
];

export default function Home() {
  return (
    <section className="mt-10 flex flex-col">
      <ProductCategories categories={categories} />
      <h2 className="text-xl font-medium">Best Selling Items</h2>

      <div className="w-full overflow-auto">
        <ProductList className="mt-8 w-max overflow-auto py-3" />
      </div>
    </section>
  );
}
