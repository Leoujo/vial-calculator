import { User } from '@/app/types/user';
import { axiosClient } from '../axios';

export const signUpUser = async (userData: User) => {
  let { data } = await axiosClient.post(`/signup`, userData);
  localStorage.setItem('token', data.token);
  return;
};
export const logInUser = async (userData: User) => {
  let { data } = await axiosClient.post(`/login`, userData);
  localStorage.setItem('token', data.token);
  return;
};
