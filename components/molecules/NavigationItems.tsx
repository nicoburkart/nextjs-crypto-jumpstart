import { useRouter } from 'next/router';
import { NavigationItem } from '../atoms/NavigationItem';

export const NavigationItems = () => {
  const router = useRouter();

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:ml-10 md:flex md:items-baseline md:space-x-4">
      <NavigationItem
        title="Home"
        active={router.pathname === '/'}
        href="/"
      ></NavigationItem>
      <NavigationItem
        title="About"
        active={router.pathname === '/about'}
        href="/about"
      ></NavigationItem>
    </div>
  );
};
