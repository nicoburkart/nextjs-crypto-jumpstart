import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

export const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 text-white bg-gradient-to-r from-primary to-secondary border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg mt-10 sm:mt-0"
    >
      {children}
    </button>
  );
};
