import apiRequest from '@utils/apiRequest';
import { useQuery } from '@tanstack/react-query';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PartnerStore } from '../types';

export const getPartnerStores = async () => {
  const res = await apiRequest.get<PartnerStore[]>('/api/partner-store');
  return res.data;
};

type QueryFnType = typeof getPartnerStores;

type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const usePartnerStores = ({ config }: UseUsersOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['users'],
    queryFn: getPartnerStores,
    ...config,
  });
};
