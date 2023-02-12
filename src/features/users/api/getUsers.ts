import apiRequest from '@utils/apiRequest';
import { User } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const getUsers = async () => {
  const res = await apiRequest.get<User[]>('/admin/api/users');
  return res.data;
  // return res.data; // {q} should i make a method that converts the response and returns the converted value?
  // i need for each user in the response to put in a new object.
};

// {q} if ill use react-query do i need to make a try and catch outside of this file when ill use this file as a hook?
//
