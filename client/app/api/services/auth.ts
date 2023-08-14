import { LoggedUser, User } from '@/app/types/user';
import { axiosClient } from '../axios';

export const signUpUser = async (userData: User) => {
  const response = await axiosClient.post<LoggedUser>(`/signup`, userData);
  localStorage.setItem('jwt', response.data.token);
  return response.data.user;
};
export const logInUser = async (userData: User) => {
  const response = await axiosClient.post<LoggedUser>(`/login`, userData);
  localStorage.setItem('jwt', response.data.token);
  return response.data.user;
};
