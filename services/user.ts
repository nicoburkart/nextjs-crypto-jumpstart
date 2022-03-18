import { User } from '@prisma/client';
import {
  AuthenticateUserMutation,
  CreateUserMutation,
  UpdateUserMutation,
  UserByPubAddrsQuery,
} from '../graphql/DocumentNodes/user';
import apolloClient from '../lib/apollo';
import { signNonce } from './wallet.service';

export const login = async (pubAddrs: string): Promise<User | undefined> => {
  let user = await getUser(pubAddrs);
  if (!user) {
    user = await signUp(pubAddrs);
  }

  if (localStorage.getItem('login-with-metamask:auth')) {
    //TODO: user will be returned although there is no VALID session anymore
  } else {
    const signedMessage = await signNonce(user.pubAddrs, user.nonce);
    user = await authenticate(user.pubAddrs, signedMessage);
  }

  return user;
};

export const logout = async () => {
  localStorage.removeItem('login-with-metamask:auth');
};

const getUser = async (pubAddrs: string): Promise<User | undefined> => {
  try {
    const data = await apolloClient.query({
      query: UserByPubAddrsQuery,
      variables: {
        pubAddrs: pubAddrs,
      },
    });
    return Promise.resolve(data.data.user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const signUp = async (pubAddrs: string): Promise<User> => {
  try {
    const data = await apolloClient.mutate({
      mutation: CreateUserMutation,
      variables: {
        pubAddrs,
      },
    });

    return Promise.resolve(data.data.createUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

//returns token and nonce
const authenticate = async (
  pubAddrs: string,
  signature: string
): Promise<User> => {
  try {
    const data = await apolloClient.mutate({
      mutation: AuthenticateUserMutation,
      variables: {
        pubAddrs,
        signature,
      },
    });
    localStorage.setItem(
      'login-with-metamask:auth',
      data.data?.authenticateUser.token
    );
    return Promise.resolve(data.data.authenticateUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUser = async (
  name: string,
  email: string
): Promise<User> => {
  try {
    const data = await apolloClient.mutate({
      mutation: UpdateUserMutation,
      variables: {
        name,
        email,
      },
    });

    return Promise.resolve(data.data.updateUser);
  } catch (error) {
    return Promise.reject(error);
  }
};
