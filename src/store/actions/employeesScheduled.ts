import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { EmployeesScheduledActionTypes, EmployeesScheduledRes } from 'store/types/employeesScheduled';

// TODO: set valid types to payloads
export const EmployeesScheduledActions = {
  getEmployeesScheduledRequest: (): Action<
  EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_REQUEST
  > => createAction(
    EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_REQUEST,
  ),
  getEmployeesScheduledSuccess: (payload: EmployeesScheduledRes): Action<
  EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_SUCCESS,
  EmployeesScheduledRes
  > => createAction(
    EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_SUCCESS,
    payload,
  ),
  getEmployeesScheduledError: (): Action<
  EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_ERROR
  > => createAction(
    EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_ERROR,
  ),
  clearEmployeesScheduledList: (): Action<
  EmployeesScheduledActionTypes.CLEAR_EMPLOYEES_SCHEDULED_LIST
  > => createAction(
    EmployeesScheduledActionTypes.CLEAR_EMPLOYEES_SCHEDULED_LIST,
  ),
};

export type EmployeesScheduledActionsUnion = ActionsUnion<
    typeof EmployeesScheduledActions>;
