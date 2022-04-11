import axios, { AxiosError } from 'axios';

import { FilterOptionsReq, FiltersOptions } from 'store/types/filters';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchFilterOptions = async ({ name, zipValue }: FilterOptionsReq): Promise<FiltersOptions[]> => {
  try {
    const url = ENDPOINTS[name];

    const { data: { data } }: ResponseObject<any> = await axios.get(`${url}?value=${zipValue}`);

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
