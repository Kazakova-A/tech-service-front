import { EmployeesScheduledActionTypes } from 'store/types/employeesScheduled';
import { EmployeesScheduledActionsUnion } from 'store/actions/employeesScheduled';
import { EmployeesScheduledState } from './declarations';

export const INITIAL_STATE = {
  isLoading: false,
  employeesScheduled: [],
};

const employeesScheduledReducer = (
  state = INITIAL_STATE,
  action: EmployeesScheduledActionsUnion,
): EmployeesScheduledState => {
  switch (action?.type) {
    case EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_SUCCESS: {
      return {
        ...state,
        employeesScheduled: action.payload,
        isLoading: false,
      };
    }
    case EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case EmployeesScheduledActionTypes.CLEAR_EMPLOYEES_SCHEDULED_LIST: {
      return {
        ...state,
        employeesScheduled: [],
      };
    }
    default: return state;
  }
};

export default employeesScheduledReducer;
