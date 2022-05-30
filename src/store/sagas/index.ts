import { all } from 'redux-saga/effects';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import employees from './employees';
import filters from './filters';
import jobs from './jobs';
import employeesScheduled from './employeesScheduled';

export const history = createBrowserHistory();

export default function* staticSagas(): Generator {
  yield all([
    routerMiddleware(history),
    employees(),
    filters(),
    jobs(),
    employeesScheduled(),
  ]);
}
