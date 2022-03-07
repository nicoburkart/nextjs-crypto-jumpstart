import { useState } from 'react';
import { PrimaryButton } from '../atoms/Button';
import { DropDownMenu } from '../molecules/DropDownMenu';
import { NavigationItems } from '../molecules/NavigationItems';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 md:px-8 shadow py-4 ">
        <div className="max-w-7xl mx-auto md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center px-4 md:pl-0">
              <a className="flex-shrink-0" href="/">
                BlockBurk.
                {/* <div className="w-12 h-12 bg-current rounded-full"></div> */}
              </a>
              <div className="hidden md:block">
                <NavigationItems></NavigationItems>
              </div>
            </div>
            <div className="block ml-auto">
              <div className="flex items-center md:ml-6">
                <div className="relative">
                  {true ? (
                    <PrimaryButton>Connect Wallet</PrimaryButton>
                  ) : (
                    <DropDownMenu
                      items={[{ label: 'hello' }, { label: 'world' }]}
                      icon={
                        <img
                          src="assets/icons/profile.svg"
                          className="h-12 w-12"
                        ></img>
                      }
                    ></DropDownMenu>
                  )}
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center px-2 md:px-4 py-2 rounded-md focus:outline-none"
                onClick={() => setNavOpen(!navOpen)}
              >
                <img className="h-12 w-12" src="assets/icons/menu.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={navOpen ? '' : 'hidden' + ' md:hidden'}>
          <NavigationItems></NavigationItems>
        </div>
      </nav>
    </div>
  );
};
