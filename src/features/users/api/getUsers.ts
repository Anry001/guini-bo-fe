import apiRequest from '@utils/apiRequest';
import { MutationConfig } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';
import { ResponseData } from '../types';

const getUsers = async () => {
  const res = await apiRequest.get<ResponseData>('/admin/api/users');
  return res.data;
};
