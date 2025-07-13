import React from 'react';
import { cn } from '../utils/cn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-4 rounded-md', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Alert.displayName = 'Alert'; 