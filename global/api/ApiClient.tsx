import axios, { Axios, AxiosRequestConfig } from 'axios';

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://192.168.0.2:8080/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

export const get = (url: string) => {
  return axios.get(url, DEFAULT_CONFIG);
};
