import { verify } from 'jsonwebtoken';

export const verifyToken = (req, res): string | undefined => {
  const token = req.headers.authorization;
  if (!token) {
    return undefined;
  }
  try {
    const userPub = verify(token, process.env.TOKEN_KEY) as {
      pubAddrs: string;
      iat: number;
      exp: number;
    };
    return userPub.pubAddrs;
  } catch (err) {
    return undefined;
  }
};
