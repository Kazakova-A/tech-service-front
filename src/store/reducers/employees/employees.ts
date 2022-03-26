import { EmployeesActionTypes } from 'store/types/employees';
import { EmployeesActionsUnion } from 'store/actions/employees';

import { INITIAL_STATE } from './initialState';
import { EmployeesState } from './declarations';

const employeesReducer = (
  state = INITIAL_STATE,
  action: EmployeesActionsUnion,
): EmployeesState => {
  switch (action?.type) {
    case EmployeesActionTypes.GET_EMPLOYEES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EmployeesActionTypes.GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        isLoading: false,
      };
    }
    case EmployeesActionTypes.GET_EMPLOYEES_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case EmployeesActionTypes.CLEAR_LIST: {
      return {
        ...state,
        employees: [],
      };
    }
    default: return state;
  }
};

export default employeesReducer;
