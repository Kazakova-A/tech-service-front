export enum EmployeesScheduledActionTypes {
  GET_EMPLOYEES_SCHEDULED_REQUEST = 'GET_EMPLOYEES_SCHEDULED_REQUEST',
  GET_EMPLOYEES_SCHEDULED_SUCCESS = 'GET_EMPLOYEES_SCHEDULED_SUCCESS',
  GET_EMPLOYEES_SCHEDULED_ERROR = 'GET_EMPLOYEES_SCHEDULED_ERROR',

  CLEAR_EMPLOYEES_SCHEDULED_LIST = 'CLEAR_EMPLOYEES_SCHEDULED_LIST',
}

export type EmployeesScheduledRes = {
  id?: string | number,
  address: AddressDataType,
  day: number,
  employeeId: number,
  end: number,
  start: number,
  status: string,
}[];

type AddressDataType = {
  id: number,
  city: string,
  houseNumber: string,
  street: string,
};
