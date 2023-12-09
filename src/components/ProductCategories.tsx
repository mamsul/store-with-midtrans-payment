type ProductCategoriesProps = {
  categories?: Array<string>;
};

const ProductCategories = ({ categories = [] }: ProductCategoriesProps) => {
  if (categories.length < 1) {
    return <span className="mb-5 text-gray-500">No category found</span>;
  }

  return (
    <div className="mb-8 w-full overflow-auto border-y border-gray-400/30 px-6 py-3">
      <div className="flex w-max flex-row space-x-8 overflow-auto">
        {categories.map((item, idx) => {
          return (
            <span
              key={`category-${idx}`}
              className="cursor-pointer text-sm font-medium text-gray-700 transition-all duration-300 hover:font-semibold hover:text-gray-800">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;
