import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'highlight';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', ...props }, ref) => {
    const styleVariant = {
      default: 'border border-gray-500 hover:border-gray-800',
      highlight: 'bg-gray-800 text-white',
    };

    return (
      <button
        className={cn(
          'inline-flex h-full w-full items-center justify-center rounded-md',
          styleVariant[variant],
        )}
        {...props}
        ref={ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
