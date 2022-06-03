import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { employees } from './employees';
import { filters } from './filters';
import { utils } from './utils';

import { EmployeesState } from './employees/declarations';
import { UtilsState } from './utils/declarations';
import { FiltersState } from './filters/declarations';
import { JobsState } from './jobs/declarations';
import { jobs } from './jobs';
import { employeesScheduled } from './employeesScheduled';
import { EmployeesScheduledState } from './employeesScheduled/declarations';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  employees: EmployeesState;
  filters: FiltersState;
  utils: UtilsState;
  jobs: JobsState;
  employeesScheduled: EmployeesScheduledState;
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  employees,
  filters,
  utils,
  jobs,
  employeesScheduled,
});

export default rootReducer;
