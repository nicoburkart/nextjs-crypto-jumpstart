import { User } from '@prisma/client';

export const getUser = async (publicAddress: string): Promise<User> => {
  try {
    const res = await fetch(`http://localhost:8080/api/users/${publicAddress}`);
    if (res.status === 204) {
      console.log('no user found with this address.');
      console.log('Creating new user...');
      const userData = await signUp(publicAddress);
      return Promise.resolve(userData);
    } else if (res.status === 200) {
      const userData = await res.json();
      return Promise.resolve(userData);
    } else {
      return Promise.reject('could not find/create a user with this address');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const signUp = async (publicAddress: string): Promise<User> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicAddress: publicAddress }),
  };
  try {
    const res = await fetch(
      `http://localhost:8080/api/createUser`,
      requestOptions
    );
    const userData = await res.json();
    return Promise.resolve(userData);
  } catch (error) {
    return Promise.reject(error);
  }
};
