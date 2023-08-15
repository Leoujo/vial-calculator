import axios from 'axios';

const ApiURL = process.env.NEXT_PUBLIC_API_URL;
const prodApiURL = 'https://vial-calculator-service.onrender.com';
export const axiosClient = axios.create({
  baseURL: ApiURL ? ApiURL : prodApiURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
