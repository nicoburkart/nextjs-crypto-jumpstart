import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';
import { verifyToken } from './middleware/auth';

export type Context = {
  prisma: PrismaClient;
  userPub?: string;
};
export async function createContext({ req, res }): Promise<Context> {
  //returns undefined if user is not verified and public address if it is veryfied
  const userPub = verifyToken(req, res);

  return {
    prisma,
    userPub,
  };
}
