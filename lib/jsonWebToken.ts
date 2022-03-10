import {
  toBuffer,
  hashPersonalMessage,
  fromRpcSig,
  bufferToHex,
  publicToAddress,
  ecrecover,
} from 'ethereumjs-util';
import { sign } from 'jsonwebtoken';

function toHex(str) {
  var hex = '';
  for (var i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16);
  }
  return hex;
}

export const publicAddressIsValid = (
  publicAddress: string,
  msg: string,
  signature: string
) => {
  const msgBuffer = toBuffer('0x' + toHex(msg));
  const msgHash = hashPersonalMessage(msgBuffer);
  const signatureBuffer: any = toBuffer(signature);
  const signatureParams = fromRpcSig(signatureBuffer);
  const publicKey = ecrecover(
    msgHash,
    signatureParams.v,
    signatureParams.r,
    signatureParams.s
  );

  const addressBuffer = publicToAddress(publicKey);
  const address = bufferToHex(addressBuffer);
  return address.toLowerCase() === publicAddress.toLowerCase();
};

export const generateToken = (pubAddrs: string) => {
  return sign({ pubAddrs: pubAddrs }, process.env.TOKEN_KEY, {
    expiresIn: '2h',
  });
};
