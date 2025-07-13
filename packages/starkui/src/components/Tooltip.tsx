import React from 'react';
import { cn } from '../utils/cn';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  children: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip'; 