import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { EmployeessActionTypes, GetEmployeesRes } from 'store/types/employees';

// TODO: set valid types to payloads
export const EmployeesActions = {
  getEmployeesListRequest: (): Action<
  EmployeessActionTypes.GET_EMPLOYEES_LIST_REQUEST
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_LIST_REQUEST,
  ),
  getEmployeesListSuccess: (payload: GetEmployeesRes[]): Action<
  EmployeessActionTypes.GET_EMPLOYEES_LIST_SUCCESS,
  GetEmployeesRes[]
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_LIST_SUCCESS,
    payload,
  ),
  getEmployeesListError: (): Action<
  EmployeessActionTypes.GET_EMPLOYEES_LIST_ERROR
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_LIST_ERROR,
  ),
  clearList: (): Action<
  EmployeessActionTypes.CLEAR_LIST
  > => createAction(
    EmployeessActionTypes.CLEAR_LIST,
  ),
};

export type EmployeesActionsUnion = ActionsUnion<
  typeof EmployeesActions>;
