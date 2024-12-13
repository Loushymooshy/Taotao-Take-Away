// api/postLogin.ts
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  role: string;
}

export const postLogin = async (username: string, password: string) => {
  const response = await fetch('https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error('Login failed');
  }
  const decodedToken = jwtDecode<DecodedToken>(data.token);
  return { ...data, role: decodedToken.role };
};