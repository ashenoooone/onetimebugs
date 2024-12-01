import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/shared/utils';

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  variant?: 'solid' | 'dashed';
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      variant = 'solid',
      ...props
    },
    ref,
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'shrink-0',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          variant === 'solid' && 'bg-bg-secondary',
          variant === 'dashed' &&
            'border-0 border-t border-dashed border-bg-secondary',
          className,
        )}
        {...props}
      />
    );
  },
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
