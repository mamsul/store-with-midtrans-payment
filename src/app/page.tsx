import { fetchAllCategories, fetchAllProducts } from '@/_action';
import ProductCategories from '@/components/ProductCategories';
import ProductList from '@/components/ProductList';

export default async function Home() {
  const categories = await fetchAllCategories();
  const products = await fetchAllProducts();

  return (
    <>
      <section className="mt-10 flex flex-col">
        <ProductCategories categories={categories} />
        <h2 className="text-xl font-medium">Best Selling Items</h2>

        <div className="w-full overflow-auto">
          <ProductList
            className="mt-8 w-max overflow-auto py-3"
            products={products}
          />
        </div>
      </section>
    </>
  );
}
