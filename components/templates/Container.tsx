import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={
        'container mx-auto flex px-5 items-center flex-col' + ' ' + className
      }
    >
      {children}
    </div>
  );
};
