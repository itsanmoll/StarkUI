import React from 'react';
import { cn } from '../utils/cn';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, isOpen, onClose, children, ...props }, ref) => {
    if (!isOpen) return null;
    
    return (
      <div
        ref={ref}
        className={cn('fixed inset-0 z-50', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Modal.displayName = 'Modal'; 