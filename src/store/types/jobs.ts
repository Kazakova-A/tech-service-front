export enum JobsActionTypes {
  GET_JOBS_LIST_REQUEST = 'GET_JOBS_LIST_REQUEST',
  GET_JOBS_LIST_SUCCESS = 'GET_JOBS_LIST_SUCCESS',
  GET_JOBS_LIST_ERROR = 'GET_JOBS_LIST_ERROR',
  ADD_JOBS_REQUEST = 'ADD_JOBS_REQUEST',
  ADD_JOBS_SUCCESS = 'ADD_JOBS_SUCCESS',
  ADD_JOBS_ERROR = 'ADD_JOBS_ERROR',
  CLEAR_LIST = 'CLEAR_LIST',
}

export interface GetJobsRes {
  customerId: number;
  workStatus: string;
  startedAt: Date;
  completedAt: Date;
  employeeId: number;
  diagnosticSpentTime: number;
  brand: string;
  scheduledStart: number;
  scheduledEnd: number;
  technicTypes: string;
}

export interface AddJobsRes {
  customerId?: number;
  employeeId: number;
  brand: string;
  scheduledStart: number;
  scheduledEnd: number;
  technicTypes: string;
}
