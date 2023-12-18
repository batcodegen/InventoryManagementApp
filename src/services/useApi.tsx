import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import MockAdapter from 'axios-mock-adapter';
import customers from '../dummydata/customer.json';
import weights from '../dummydata/containerweight.json';
import deliverydata from '../dummydata/deliverydata.json';
import overviewdata from '../dummydata/overviewdata.json';

const ENABLE_MOCK_RESPONSE = true;
const mockAdapter = new MockAdapter(axios, {delayResponse: 2000});

const createMockResponse = (url: string) => {
  switch (url) {
    case '/customers':
      mockAdapter.onGet(url).reply(200, {
        data: customers,
      });
      break;
    case '/weights':
      mockAdapter.onGet(url).reply(200, {
        data: weights,
      });
      break;
    case '/deliverydata':
      mockAdapter.onGet(url).reply(200, {
        data: deliverydata,
      });
      break;
    case '/overview':
      mockAdapter.onGet(url).reply(200, {
        data: overviewdata,
      });
      break;
    default:
      break;
  }
};

export const useGetApi = (url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (ENABLE_MOCK_RESPONSE) {
        createMockResponse(url);
      }
      const response: AxiosResponse<any> = await axios.get(url, options);
      setData(response?.data?.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, isLoading, error};
};
