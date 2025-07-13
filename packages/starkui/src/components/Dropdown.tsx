import React from 'react';
import { cn } from '../utils/cn';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, isOpen, onToggle, children, ...props }, ref) => {
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

Dropdown.displayName = 'Dropdown'; 