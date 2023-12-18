'use client';

import { useRouter } from 'next/navigation';

type CategoryItemProps = {
  category: string;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="cursor-pointer text-sm font-medium text-gray-700 transition-all duration-300 hover:font-semibold hover:text-gray-800">
      {category}
    </button>
  );
};

export default CategoryItem;
