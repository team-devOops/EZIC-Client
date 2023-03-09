import { get, post } from '@/global/api/ApiClient';

export const randomSolutionSeq = async (count: string | string[] | undefined) => {
  const { data } = await get(`/q/${count}`);
  return data.data;
};

interface randomTestRequest {
  questionCnt: number;
}
export const randomTest = async (request: randomTestRequest) => {
  const { data } = await post(`/test/`, request);
  return data.data;
};
