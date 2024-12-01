import { cn } from '@/shared/utils/cn.ts';
import React, { ReactNode } from 'react';

type PageProps = {
  className?: string;
  children?: ReactNode;
};

export const Page = React.memo((props: PageProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        'flex flex-col px-4 pt-4 min-h-screen overflow-y-auto mx-auto items-center w-full',
        className,
      )}
    >
      {children}
    </div>
  );
});

Page.displayName = 'Page';
