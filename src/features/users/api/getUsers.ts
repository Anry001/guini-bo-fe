import axiosClient from '@lib/axios';
import { useQuery } from '@tanstack/react-query';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { User } from '../types';

export const getUsers = async () => {
  const res = await axiosClient.get<User[]>('/admin/api/users');
  return res.data;
};

type QueryFnType = typeof getUsers;

type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useUsers = ({ config }: UseUsersOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['users'],
    queryFn: getUsers,
    ...config,
  });
};
