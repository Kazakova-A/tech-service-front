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
      workStatus: 'workStatus',
      startedAt: '2022-06-03 10:56:11.110 +00:00',
      completedAt: 'completedAt',
      employeeId: action.payload.employeeId,
      diagnosticSpentTime: 'diagnosticSpentTime',
      brand: action.payload.brand,
      scheduledStart: '2022-06-03 10:56:11.110 +00:00',
      scheduledEnd: 'scheduledEnd',
      technicTypes: action.payload.technicTypes,
    });
    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
