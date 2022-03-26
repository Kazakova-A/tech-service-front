import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { EmployeesActionTypes } from 'store/types/employees';

// TODO: set valid types to payloads
export const EmployeesActions = {
  getEmployeesRequest: (): Action<
  EmployeesActionTypes.GET_EMPLOYEES_REQUEST
  > => createAction(
    EmployeesActionTypes.GET_EMPLOYEES_REQUEST,
  ),
  getEmployeesSuccess: (payload: any[]): Action<
  EmployeesActionTypes.GET_EMPLOYEES_SUCCESS,
  any[]
  > => createAction(
    EmployeesActionTypes.GET_EMPLOYEES_SUCCESS,
    payload,
  ),
  getEmployeesError: (): Action<
  EmployeesActionTypes.GET_EMPLOYEES_ERROR
  > => createAction(
    EmployeesActionTypes.GET_EMPLOYEES_ERROR,
  ),
  clearList: (): Action<
  EmployeesActionTypes.CLEAR_LIST
  > => createAction(
    EmployeesActionTypes.CLEAR_LIST,
  ),
};

export type EmployeesActionsUnion = ActionsUnion<
  typeof EmployeesActions>;
