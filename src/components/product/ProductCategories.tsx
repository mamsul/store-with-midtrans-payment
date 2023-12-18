import CategoryItem from './CategoryItem';

type ProductCategoriesProps = {
  categories?: Array<string>;
};

const ProductCategories = ({ categories = [] }: ProductCategoriesProps) => {
  if (categories.length < 1) {
    return <span className="mb-5 text-gray-500">No category found</span>;
  }

  return (
    <div className="flex w-max flex-row space-x-8 overflow-auto">
      {categories.map((item, idx) => {
        return <CategoryItem key={`category-${idx}`} category={item} />;
      })}
    </div>
  );
};

export default ProductCategories;
