import React from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const buttonVariants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900 shadow-sm hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
  outline: 'border border-primary-300 bg-transparent hover:bg-primary-50 text-primary-700 hover:text-primary-800 transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  ghost: 'bg-transparent hover:bg-secondary-100 text-secondary-700 hover:text-secondary-900 transition-all duration-200 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
  danger: 'bg-error-600 hover:bg-error-700 text-white shadow-sm hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-error-500 focus:ring-offset-2',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm font-medium rounded-md',
  md: 'px-4 py-2 text-sm font-medium rounded-md',
  lg: 'px-6 py-3 text-base font-medium rounded-lg',
  xl: 'px-8 py-4 text-lg font-medium rounded-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none',
          buttonVariants[variant],
          buttonSizes[size],
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button'; 