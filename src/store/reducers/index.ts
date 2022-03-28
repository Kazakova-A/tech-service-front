import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { employees } from './employees';
import { filters } from './filters';
import { utils } from './utils';

import { EmployeesState } from './employees/declarations';
import { UtilsState } from './utils/declarations';
import { FiltersState } from './filters/declarations';

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  employees: EmployeesState;
  filters: FiltersState;
  utils: UtilsState;
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  employees,
  filters,
  utils,
});

export default rootReducer;
