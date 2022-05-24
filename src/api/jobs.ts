import axios, { AxiosError } from 'axios';
import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchJobsList = async (): Promise<any> => {
  try {
    const url = ENDPOINTS.getFilteredJobsList;
    const { data: { data } }: ResponseObject<any> = await axios.get(`${url}`);

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
