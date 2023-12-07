import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

const getRequest = async ({url, requestParams}) => {
  const response = await instance.get(url, requestParams);
  return response.data;
};

const postRequest = async ({url, body}) => {
  const response = await instance.post(url, body);
  return response.data;
};

export {getRequest, postRequest};
