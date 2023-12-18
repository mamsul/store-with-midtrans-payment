import { fetchAllCategories } from '@/_action';
import ProductCategories from '@/components/product/ProductCategories';
import ProductContent from '@/components/section/ProductContent';
import { Suspense } from 'react';

const CategoryContent = async () => {
  const categories = await fetchAllCategories();

  return <ProductCategories categories={categories} />;
};

type HomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: HomeProps) {
  const { category } = searchParams;

  return (
    <section className="mt-10 flex flex-col">
      <div className="mb-8 w-full overflow-auto border-y border-gray-400/30 px-6 py-3">
        <Suspense fallback={<p>Loading categories...</p>}>
          <CategoryContent />
        </Suspense>
      </div>

      <ProductContent category={category} />
    </section>
  );
}
