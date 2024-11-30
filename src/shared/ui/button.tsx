import React, { ComponentProps, memo } from 'react';
import { cn } from '@/shared/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'text-button font-semibold transition flex items-center justify-center leading-button px-[16px] py-[10px] rounded-xl disabled:border-state-accent-disabled disabled:pointer-events-none',
  {
    variants: {
      variant: {
        green: 'bg-d-green text-text-primary disabled:bg-d-gray',
        icon: 'p-0 hover:opacity-80',
        transparent_alternative:
          'text-text-tertiary hover:text-text-secondary normal-case',
        default:
          'text-bg-primary bg-text-primary hover:opacity-70 transition-all disabled:bg-state-accent-disabled',
        outline:
          'text-text-accent border border-border-accent hover:bg-state-transparent-blue-hover focus:bg-state-transparent-blue-focused disabled:text-text-primary',
        transparent:
          'text-text-accent hover:bg-state-transparent-blue-hover focus:bg-state-transparent-blue-focused',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    type = 'button',
    variant = 'default',
    ...rest
  } = props;
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
