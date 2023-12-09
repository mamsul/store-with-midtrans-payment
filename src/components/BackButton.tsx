'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BackButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group relative flex w-16 items-center gap-2 overflow-hidden text-gray-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <ArrowLeft className="h-6 w-6 " />
      <span
        className={`absolute transition-all duration-300 ${
          isHovered ? 'left-7 opacity-100' : '-left-10 opacity-0'
        }`}>
        Back
      </span>
    </button>
  );
};

export default BackButton;
