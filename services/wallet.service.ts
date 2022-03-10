import { ethers } from 'ethers';
import Web3 from 'web3';

declare let window: any;

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

export const signNonce = async (
  pubAddrs: string,
  nonce: number
): Promise<string> => {
  const web3 = new Web3(Web3.givenProvider);
  const signedMessage = await web3.eth.personal.sign(
    web3.utils.fromUtf8('Please sign this number to login: ' + nonce),
    pubAddrs,
    ''
  );
  return signedMessage;
};
