export const connectWallet = async (): Promise<string | undefined> => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      return;
    }

    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    return accounts[0];
  } catch (error) {
    console.log(error);
    return;
  }
};

export const checkIfWalletIsConnected = async (): Promise<
  string | undefined
> => {
  //guard check if user has metamask
  const { ethereum } = window;
  if (!ethereum) {
    return;
  }

  //Check if we're authorized to access the user's wallet
  const accounts = await ethereum.request({ method: 'eth_accounts' });

  return accounts.length !== 0 ? accounts[0] : undefined;
};

declare let window: any;
