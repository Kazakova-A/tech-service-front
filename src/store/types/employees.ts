export enum EmployeesActionTypes {
  GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST',
  GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS',
  GET_EMPLOYEES_ERROR = 'GET_EMPLOYEES_ERROR',

  CLEAR_LIST = 'CLEAR_LIST',
}

export interface GetEmployeesReq {
  zip: number;
  brand: string;
  type: string;
}
