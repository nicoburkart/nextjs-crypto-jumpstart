import Link from 'next/link';

type Props = {
  title: string;
  href: string;
  active: boolean;
};

export const NavigationItem = ({ title, active, href }: Props) => {
  return (
    <Link href={href}>
      <a
        className={
          (active ? 'text-gray-800' : 'text-gray-400') +
          ' hover:text-gray-800 dark:hover:text-white block md:inline px-3 py-2 rounded-md text-base md:text-md font-medium'
        }
      >
        {title}
      </a>
    </Link>
  );
};
