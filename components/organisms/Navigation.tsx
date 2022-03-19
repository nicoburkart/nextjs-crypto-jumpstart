import { useContext, useEffect, useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { AppCtx } from '../../lib/ContextProvider';
import { getSession, getUser, logout, signUp } from '../../services/user';
import { DropDownMenu } from '../molecules/DropDownMenu';
import { NavigationItems } from '../molecules/NavigationItems';
import { Container } from '../templates/Container';
import { WalletConnector } from './WalletConnector';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [{ data: accountData }, disconnect] = useAccount();
  const [, signMessage] = useSignMessage();
  const { userCtx } = useContext(AppCtx);

  useEffect(() => {
    loginUser();
  }, [accountData]);

  const loginUser = async () => {
    try {
      if (
        !loadingUser &&
        accountData &&
        userCtx.user.pubAddrs !== accountData.address
      ) {
        setLoadingUser(true);
        let user = await getUser(accountData.address);
        if (!user) {
          user = await signUp(accountData.address);
        }
        let isAuthenticated = false;
        if (localStorage.getItem('session-token:auth')) {
          isAuthenticated = true;
          //TODO: user will be returned although there is no VALID session anymore
        } else {
          const signedMessage = await signMessage({
            message: 'Please sign this number to login: ' + user.nonce,
          });
          isAuthenticated = await getSession(user.pubAddrs, signedMessage.data);
        }

        if (user && isAuthenticated) {
          userCtx.dispatch({ type: 'login', payload: user });
        }
        setLoadingUser(false);
      }
    } catch (error) {
      console.log(error);
      disconnect();
      setLoadingUser(false);
    }
  };

  const ProfileMenu = () => {
    return (
      <DropDownMenu
        items={[
          {
            label: 'logout',
            action: () => {
              disconnect();
              logout();
              userCtx.dispatch({ type: 'logout' });
            },
          },
        ]}
        icon={<img src="assets/icons/profile.svg" className="h-12 w-12"></img>}
      ></DropDownMenu>
    );
  };

  return (
    <header>
      <nav className="bg-white shadow py-4 ">
        <Container>
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center px-4 md:pl-0">
              <a className="flex flex-row items-center justify-center" href="/">
                <div className="rounded-full overflow-hidden">
                  <img src="assets/images/logo.png" className="w-12 h-12" />
                </div>
                <h1 className="hidden md:block title-font font-medium text-xl ml-4">
                  CreativeContracts
                </h1>
              </a>
              <div className="hidden md:block">
                <NavigationItems></NavigationItems>
              </div>
            </div>
            <div className="block ml-auto">
              <div className="flex items-center md:ml-6">
                {loadingUser ? (
                  <img
                    className="animate-spin"
                    src="assets/icons/loading.svg"
                    alt=""
                  />
                ) : (
                  <div className="relative">
                    {!accountData ? (
                      <WalletConnector></WalletConnector>
                    ) : (
                      <ProfileMenu></ProfileMenu>
                    )}
                  </div>
                )}
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
        </Container>
        <div className={navOpen ? '' : 'hidden' + ' md:hidden'}>
          <NavigationItems></NavigationItems>
        </div>
      </nav>
    </header>
  );
};
