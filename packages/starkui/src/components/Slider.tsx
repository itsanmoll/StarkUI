import React from 'react';
import { cn } from '../utils/cn';

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  label?: string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      disabled = false,
      label,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('w-full flex flex-col gap-2', className)}>
        {label && (
          <label className="text-sm font-medium text-gray-700" htmlFor={props.id}>{label}</label>
        )}
        <input
          type="range"
          id={props.id}
          ref={ref}
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={e => onChange(Number(e.target.value))}
          className={cn(
            'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50',
            'focus:outline-none focus:ring-2 focus:ring-primary-500',
            'accent-primary-600',
            disabled && 'cursor-not-allowed',
          )}
          {...props}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider'; 