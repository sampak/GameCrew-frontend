import { useQuery } from 'react-query';
import { axiosInstance } from './axios';

const queryKeys = {
  getMe: 'userService.getMe',
};

const getMe = async () => {
  const response = await axiosInstance.get('/user/me');

  return response.data ?? [];
};

const useGetMe = () => {
  return useQuery(queryKeys.getMe, () => getMe(), {
    staleTime: 0,
    cacheTime: 0,
  });
};

export default {
  useGetMe,
};
