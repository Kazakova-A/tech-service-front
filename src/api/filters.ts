import axios, { AxiosError } from 'axios';

import { Filters } from 'store/types/filters';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchFilterOptions = async (name: Filters.brand | Filters.type): Promise<any> => {
  try {
    const url = ENDPOINTS[Filters[name]];

    const { data: { data } }: ResponseObject<any> = await axios.get(url);

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
