'use client';
import { AlertTriangleIcon } from 'lucide-react';

// Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="items flex max-w-lg flex-col justify-start rounded-lg border border-gray-500 p-4">
        <AlertTriangleIcon className="h-10 w-10 text-red-500" />
        <h2 className="mt-2 text-xl font-semibold">Something went wrong!</h2>
        <p className="mt-3">
          {error.name}, {error.message}
        </p>
        <button onClick={() => reset()} className="mt-5 w-max">
          Try again
        </button>
      </div>
    </div>
  );
}
