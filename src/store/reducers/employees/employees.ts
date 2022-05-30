import { EmployeessActionTypes } from 'store/types/employees';
import { EmployeesActionsUnion } from 'store/actions/employees';

import { INITIAL_STATE } from './initialState';
import { EmployeesState } from './declarations';

const employeesReducer = (
  state = INITIAL_STATE,
  action: EmployeesActionsUnion,
): EmployeesState => {
  switch (action?.type) {
    case EmployeessActionTypes.GET_EMPLOYEES_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EmployeessActionTypes.GET_EMPLOYEES_LIST_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        isLoading: false,
      };
    }
    case EmployeessActionTypes.GET_EMPLOYEES_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case EmployeessActionTypes.CLEAR_LIST: {
      return {
        ...state,
        employees: [],
      };
    }
    default: return state;
  }
};

export default employeesReducer;
