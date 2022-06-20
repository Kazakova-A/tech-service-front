import axios, { AxiosError } from 'axios';
import { CurrentAddressRes } from 'store/types/currentAddress';
import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchCurrentAddress = async (params: CurrentAddressRes): Promise<any> => {
  try {
    const url = ENDPOINTS.getCurrentAddress;
    const { data: { data } }: ResponseObject<any> = await axios.get(`${url}`, { params });
    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};