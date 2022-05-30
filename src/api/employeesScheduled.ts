import axios, { AxiosError } from 'axios';
import { EmployeesScheduledRes } from 'store/types/employeesScheduled';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchEmployeesScheduled = async (params: EmployeesScheduledRes): Promise<any> => {
  try {
    const url = ENDPOINTS.getFilteredEmployeesSchedule;
    const { data: { data } }: ResponseObject<any> = await axios.get(`${url}`, { params });

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
