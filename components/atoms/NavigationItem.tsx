import Link from 'next/link';

type Props = {
  title: string;
  active: boolean;
};

export const NavigationItem = ({ title, active }: Props) => {
  return (
    <Link href={title.toLowerCase()}>
      <a
        className={
          (active ? 'text-gray-800' : 'text-gray-400') +
          ' hover:text-gray-800 dark:hover:text-white block md:inline px-3 py-2 rounded-md text-base md:text-md font-medium'
        }
        href="/#"
      >
        {title}
      </a>
    </Link>
  );
};
