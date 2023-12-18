'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface TextAreaFieldProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  errors?: string;
}

const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, placeholder, className, id, errors, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id} className="text-gray-600">
          {label}
        </label>
        <textarea
          id={id}
          placeholder={placeholder}
          rows={5}
          className={cn(
            'w-full rounded-md border border-transparent bg-gray-50/30 px-4 py-2 text-gray-700 outline-none transition-all duration-300 focus:border-gray-700',
            className,
          )}
          {...props}
          ref={ref}
        />
        {errors && <span className="mt-1 text-sm text-red-600">{errors}</span>}
      </div>
    );
  },
);

TextAreaField.displayName = 'TextAreaField';

export { TextAreaField };
