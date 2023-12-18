import { capitalizeEachWord } from '@/lib/utils';

type ListProductTitleProps = {
  category: string;
};

const ListProductTitle = ({ category }: ListProductTitleProps) => {
  const text = category
    ? `${capitalizeEachWord(category)} Products`
    : 'Best Selling Items';
  return <h2 className="text-xl font-medium">{text}</h2>;
};

export default ListProductTitle;
