import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={
        'title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-4' +
        ' ' +
        className
      }
    >
      {children}
    </h1>
  );
};

export const SubTitle = ({ children, className }: Props) => {
  return (
    <h2
      className={
        'text-gray-900 text-lg title-font font-medium mb-3' + ' ' + className
      }
    >
      {children}
    </h2>
  );
};
