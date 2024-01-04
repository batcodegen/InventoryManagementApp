import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://142.93.209.63:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export const setHeaderToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const ENDPOINT = Object.freeze({
  LOGIN: '/login/',
});
