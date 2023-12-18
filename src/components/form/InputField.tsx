'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  errors?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, placeholder, className, id, errors, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id} className="text-gray-600">
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            'h-12 w-full rounded-md border border-transparent bg-gray-50/30 px-4 text-gray-700  outline-none transition-all duration-300 focus:border-gray-700',
            className,
          )}
        />
        {errors && <span className="mt-1 text-sm text-red-600">{errors}</span>}
      </div>
    );
  },
);

InputField.displayName = 'InputField';

export { InputField };
