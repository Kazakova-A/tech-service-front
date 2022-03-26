import axios, { AxiosError } from 'axios';

import { GetEmployeesReq } from 'store/types/employees';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchEmployees = async ({ zip, params }: GetEmployeesReq): Promise<any> => {
  try {
    const url = params ? ENDPOINTS.getEmployeesByTypeBrand : ENDPOINTS.getEmployeesByZip;

    const { data: { data } }: ResponseObject<any> = await axios.get(`${url}/${zip}`, { params });

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};