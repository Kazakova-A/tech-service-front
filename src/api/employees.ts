import axios, { AxiosError } from 'axios';
import { GetEmployeesRes } from 'store/types/employees';
import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const fetchEmployeesList = async (params: GetEmployeesRes): Promise<any> => {
  try {
    const url = ENDPOINTS.getEmployeesList;
    const { data: { data } }: ResponseObject<any> = await axios.get(`${url}`, { params });

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
