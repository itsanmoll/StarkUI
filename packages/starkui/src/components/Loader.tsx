import React from 'react';
import { cn } from '../utils/cn';
import { Spinner } from './Spinner';

export interface LoaderProps {
  text?: string;
  spinnerSize?: number;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text = 'Loading...', spinnerSize = 32, className }) => (
  <div className={cn('flex flex-col items-center justify-center py-8', className)}>
    <Spinner size={spinnerSize} className="mb-3 text-primary-600" />
    {text && <span className="text-sm text-gray-600">{text}</span>}
  </div>
);

Loader.displayName = 'Loader'; 