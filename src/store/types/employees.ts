export enum EmployeessActionTypes {
  GET_EMPLOYEES_LIST_REQUEST = 'GET_EMPLOYEES_LIST_REQUEST',
  GET_EMPLOYEES_LIST_SUCCESS = 'GET_EMPLOYEES_LIST_SUCCESS',
  GET_EMPLOYEES_LIST_ERROR = 'GET_EMPLOYEES_LIST_ERROR',

  CLEAR_LIST = 'CLEAR_LIST',
}

export interface GetEmployeesRes {
  zip: number;
  brand: string;
  type: string;
}
