import Web3 from 'web3';

declare let window: any;

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
