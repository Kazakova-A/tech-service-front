import { EmployeesScheduledActionTypes } from 'store/types/employeesScheduled';
import { EmployeesScheduledActionsUnion } from 'store/actions/employeesScheduled';
import { INITIAL_STATE } from './initialState';
import { EmployeesScheduledState } from './declarations';

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
        employeesScheduled: {},
      };
    }
    default: return state;
  }
};

export default employeesScheduledReducer;
