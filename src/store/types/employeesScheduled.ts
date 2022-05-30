export enum EmployeesScheduledActionTypes {
  GET_EMPLOYEES_SCHEDULED_REQUEST = 'GET_EMPLOYEES_SCHEDULED_REQUEST',
  GET_EMPLOYEES_SCHEDULED_SUCCESS = 'GET_EMPLOYEES_SCHEDULED_SUCCESS',
  GET_EMPLOYEES_SCHEDULED_ERROR = 'GET_EMPLOYEES_SCHEDULED_ERROR',

  CLEAR_EMPLOYEES_SCHEDULED_LIST = 'CLEAR_EMPLOYEES_SCHEDULED_LIST',
}

export interface EmployeesScheduledRes {
  [key: string]: EmployeeScheduledDataType[];
}

type EmployeeScheduledDataType = {
  employeeId: string;
};
