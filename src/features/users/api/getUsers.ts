import apiRequest from '@utils/apiRequest';
import { MutationConfig } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';
import { ResponseData } from '../types';

// {q} ask guy if i need to use react-query
// eslint-disable-next-line import/prefer-default-export
export const getUsers = async () => {
  const res = await apiRequest.get<ResponseData>('/admin/api/users');
  return res.data; // {q} should i make a method that converts the response and returns the converted value?
  // i need for each user in the response to put in a new object.
};

// {q} if ill use react-query do i need to make a try and catch outside of this file when ill use this file as a hook?
//
