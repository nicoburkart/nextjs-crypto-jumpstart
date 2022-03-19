import { gql } from '@apollo/client';

export const UserByPubAddrsQuery = gql`
  query ($pubAddrs: String!) {
    user(pubAddrs: $pubAddrs) {
      id
      name
      nonce
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
      pubAddrs
      email
      image
      role
    }
  }
`;

export const AuthenticateUserMutation = gql`
  mutation ($pubAddrs: String!, $signature: String!) {
    session(pubAddrs: $pubAddrs, signature: $signature) {
      nonce
      token
    }
  }
`;

export const UpdateUserMutation = gql`
  mutation ($name: String, $email: String) {
    updateUser(name: $name, email: $email) {
      id
      name
      nonce
      pubAddrs
      email
      image
      role
    }
  }
`;
