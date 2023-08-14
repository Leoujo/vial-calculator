import jwt from 'jsonwebtoken'; // Import the jwt library

export const decodeTokenHandler = () => {
  let token = localStorage.getItem('jwt');
  if (!token) {
    return null;
  }
  const decodedToken: any = jwt.decode(token);

  if (!decodedToken) {
    return null;
  }

  // Check expiration time
  const currentTime = Date.now() / 1000; // Convert to seconds
  if (decodedToken.exp && decodedToken.exp < currentTime) {
    return null;
  }

  // If it's all good, return decoded token.
  return decodedToken;
};
