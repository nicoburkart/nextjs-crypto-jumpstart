import { User } from '@prisma/client';
import {
  AuthenticateUserMutation,
  CreateUserMutation,
  UpdateUserMutation,
  UserByPubAddrsQuery,
} from '../graphql/DocumentNodes/user';
import apolloClient from '../lib/apollo';

export const logout = async () => {
  localStorage.removeItem('login-with-metamask:auth');
};

export const getUser = async (pubAddrs: string): Promise<User | undefined> => {
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

export const signUp = async (pubAddrs: string): Promise<User> => {
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
export const authenticate = async (
  pubAddrs: string,
  signature: string
): Promise<boolean> => {
  try {
    const data = await apolloClient.mutate({
      mutation: AuthenticateUserMutation,
      variables: {
        pubAddrs,
        signature,
      },
    });
    localStorage.setItem('session-token:auth', data.data?.session.token);
    return Promise.resolve(true);
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
