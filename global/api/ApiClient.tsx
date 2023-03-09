import axios, { Axios, AxiosRequestConfig } from 'axios';
import { globalConfig } from '@/global/config';

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: globalConfig.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

export const get = (url: string) => {
  return axios.get(url, DEFAULT_CONFIG);
};

export const post = (url: string, json?: Object) => {
  return axios.post(url, json, DEFAULT_CONFIG);
};
