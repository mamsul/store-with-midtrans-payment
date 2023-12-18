'use client';

type SummaryItemProps = {
  label: string;
  value: string;
};

const SummaryItem = ({ label, value }: SummaryItemProps) => {
  return (
    <span className="inline-flex w-full items-center justify-between">
      {label}
      <span className="font-medium">{value}</span>
    </span>
  );
};

export default SummaryItem;
