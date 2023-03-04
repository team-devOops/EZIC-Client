import { get } from '@/global/api/ApiClient';

export const randomSolutionAPI = async (count: string | string[] | undefined) => {
  const { data } = await get(`/q/${count}`);
  return data.data;
};
