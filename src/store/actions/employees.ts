import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { EmployeessActionTypes } from 'store/types/employees';

// TODO: set valid types to payloads
export const EmployeesActions = {
  getEmployeesScheduledRequest: (): Action<
  EmployeessActionTypes.GET_EMPLOYEES_SCHEDULED_REQUEST
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_SCHEDULED_REQUEST,
  ),
  getEmployeesScheduledSuccess: (payload: { [key: string]: any }): Action<
  EmployeessActionTypes.GET_EMPLOYEES_SCHEDULED_SUCCESS,
  { [key: string]: any }
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_SCHEDULED_SUCCESS,
    payload,
  ),
  getEmployeesScheduledError: (): Action<
  EmployeessActionTypes.GET_EMPLOYEES_SCHEDULED_ERROR
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_SCHEDULED_ERROR,
  ),
  getEmployeesListRequest: (): Action<
  EmployeessActionTypes.GET_EMPLOYEES_LIST_REQUEST
  > => createAction(
    EmployeessActionTypes.GET_EMPLOYEES_LIST_REQUEST,
  ),
  getEmployeesListSuccess: (payload: { [key: string]: any }): Action<
  EmployeessActionTypes.GET_EMPLOYEES_LIST_SUCCESS,
  { [key: string]: any }
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
