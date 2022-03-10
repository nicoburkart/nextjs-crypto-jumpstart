import { User } from '@prisma/client';
import { Dispatch } from 'react';

export interface IUserContext {
  user: User;
  dispatch: Dispatch<ACTIONTYPE>;
}

export const defaultUser: User = {
  id: '',
  createdAt: null,
  nonce: -1,
  token: null,
  image: null,
  name: '',
  email: '',
  pubAddrs: '',
  role: 'USER',
};

type ACTIONTYPE =
  | { type: 'login'; payload: User }
  | { type: 'update'; payload: User }
  | { type: 'logout' };

export const ctxReducer = (state: typeof defaultUser, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'login':
      return action.payload;
    case 'update':
      return action.payload;
    case 'logout':
      return defaultUser;
    default:
      throw new Error();
  }
};
