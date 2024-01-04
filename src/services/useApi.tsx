import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {instance} from './request';
import MockAdapter from 'axios-mock-adapter';
import customers from '../dummydata/customer.json';
import weights from '../dummydata/containerweight.json';
import deliverydata from '../dummydata/deliverydata.json';
import overviewdata from '../dummydata/overviewdata.json';
import stockreport from '../dummydata/stockreport.json';
import financereport from '../dummydata/financereport.json';
import login from '../dummydata/login.json';

const ENABLE_MOCK_RESPONSE = true;
const mockAdapter = new MockAdapter(axios, {delayResponse: 2000});

const createMockResponse = (url: string) => {
  switch (url) {
    case '/login/':
      mockAdapter.onPost(url).reply(200, login);
      break;
    case '/customers':
      mockAdapter.onGet(url).reply(200, {data: customers});
      break;
    case '/weights':
      mockAdapter.onGet(url).reply(200, {data: weights});
      break;
    case '/deliverydata':
      mockAdapter.onGet(url).reply(200, {data: deliverydata});
      break;
    case '/overview':
      mockAdapter.onGet(url).reply(200, {data: overviewdata});
      break;
    case '/stockreport':
      mockAdapter.onGet(url).reply(200, {data: stockreport});
      break;
    case '/financereport':
      mockAdapter.onGet(url).reply(200, {data: financereport});
      break;
    default:
      break;
  }
};

const useFetchData = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async (url: string, options?: AxiosRequestConfig) => {
    setIsLoading(true);
    try {
      if (ENABLE_MOCK_RESPONSE) {
        createMockResponse(url);
      }
      const response: AxiosResponse<any> = await instance.get(url, options);
      setData(response?.data?.data);
    } catch (excp: any) {
      setError(excp?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, fetchData};
};

// GET hook
const useGetApi = (url: string, options?: AxiosRequestConfig) => {
  const {data, isLoading, error, fetchData} = useFetchData();

  useEffect(() => {
    fetchData(url, options);
  }, [url, options]); // Only refetch if url or options change

  return {data, isLoading, error};
};

// lazy GET hook
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useLazyGetApi = (url: string, options?: AxiosRequestConfig) => {
  const {fetchData, data, isLoading, error} = useFetchData();

  return {fetchData, data, isLoading, error};
};

// POST hook
const usePostApi = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const postData = async (url: string, options?: AxiosRequestConfig) => {
    setIsLoading(true);
    try {
      if (ENABLE_MOCK_RESPONSE) {
        createMockResponse(url);
      }

      const response: AxiosResponse<any> = await instance.post(url, options);
      console.log('response', response);
      setData(response?.data);
    } catch (excp: any) {
      console.log('responsedwa', excp);
      setError(excp?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, postData};
};

export {useGetApi, useLazyGetApi, usePostApi};
