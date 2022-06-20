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

export const fetchAddJobs = async (action: any): Promise<any> => {
  try {
    const url = ENDPOINTS.addJob;
    const { data: { data } }: ResponseObject<any> = await axios.post(`${url}`, {
      customerId: 1,
      employeeId: action.payload.employeeId,
      brand: action.payload.brand,
      scheduledStart: action.payload.scheduledStart,
      scheduledEnd: action.payload.scheduledEnd,
      technicTypes: action.payload.technicTypes,
    });
    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
