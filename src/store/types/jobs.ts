export enum JobsActionTypes {
  GET_JOBS_LIST_REQUEST = 'GET_JOBS_LIST_REQUEST',
  GET_JOBS_LIST_SUCCESS = 'GET_JOBS_LIST_SUCCESS',
  GET_JOBS_LIST_ERROR = 'GET_JOBS_LIST_ERROR',

  CLEAR_LIST = 'CLEAR_LIST',
}

export interface GetJobsRes {
  customerId: number;
  workStatus: string;
  startedAt: Date | null;
  completedAt: Date | null;
  employeeId: number;
  diagnosticSpentTime: number | null;
  brand: string;
  scheduledStart: Date | null;
  scheduledEnd: Date | null;
  technicTypes: string;
}
