import axios, { AxiosError } from 'axios';
import { GetEmployeesReq } from 'store/types/employees';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchEmployeesScheduled = async (params: GetEmployeesReq): Promise<any> => {
  try {
    if (params.zip) { // TODO: refactor thec zip existing check
      const url = ENDPOINTS.getFilteredEmployeesSchedule;
      const { data: { data } }: ResponseObject<any> = await axios.get(`${url}`, { params });

      return data;
    }
    return [];
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};

export const fetchEmployeesList = async (params: GetEmployeesReq): Promise<any> => {
  try {
    if (params.zip) { // TODO: refactor thec zip existing check
      const url = ENDPOINTS.getFilteredEmployeesList;
      const { data: { data } }: ResponseObject<any> = await axios.get(`${url}`, { params });

      return data;
    }
    return [];
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
