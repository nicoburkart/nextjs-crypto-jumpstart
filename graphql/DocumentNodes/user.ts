import { gql } from '@apollo/client';

export const UserByPubAddrsQuery = gql`
  query ($pubAddrs: String!) {
    user(pubAddrs: $pubAddrs) {
      id
      name
      nonce
      token
      pubAddrs
      email
      image
      role
    }
  }
`;

export const CreateUserMutation = gql`
  mutation ($pubAddrs: String!) {
    createUser(pubAddrs: $pubAddrs) {
      id
      name
      nonce
      token
      pubAddrs
      email
      image
      role
    }
  }
`;

export const AuthenticateUserMutation = gql`
  mutation ($pubAddrs: String!, $signature: String!) {
    authenticateUser(pubAddrs: $pubAddrs, signature: $signature) {
      id
      name
      nonce
      token
      pubAddrs
      email
      image
      role
    }
  }
`;

export const UpdateUserMutation = gql`
  mutation ($name: String, $email: String) {
    updateUser(name: $name, email: $email) {
      id
      name
      nonce
      token
      pubAddrs
      email
      image
      role
    }
  }
`;
