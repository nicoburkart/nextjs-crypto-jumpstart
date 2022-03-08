import jwt from 'jsonwebtoken';

const config = process.env;

export const verifyToken = (req, res): string | undefined => {
  const token =
    req.body?.token || req.query?.token || req.headers['x-access-token'];
  if (!token) {
    return undefined;
  }
  try {
    const userPub = String(jwt.verify(token, config.TOKEN_KEY));
    return userPub;
  } catch (err) {
    return undefined;
  }
};
