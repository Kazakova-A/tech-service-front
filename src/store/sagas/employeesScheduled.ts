import {
  put,
  takeLatest,
  select,
  call,
} from 'redux-saga/effects';

import { fetchEmployeesScheduled } from 'api/employeesScheduled';
import { EmployeesScheduledActionTypes } from 'store/types/employeesScheduled';
import { EmployeesScheduledActions } from '../actions/employeesScheduled';
import {
  EmployeesScheduledRes,
} from '../types/employeesScheduled';
import { UtilsActions } from '../actions/utils';
import { RootState } from '../reducers';

function* getEmployeesScheduledRequestSaga(): Generator {
  try {
    const { zip, type, brand } = (yield select((state: RootState) => state.filters)) as any;

    const payload: {} = {
      zip: zip.selected?.value,
      type: type.selected?.value,
      brand: brand.selected?.value,
    };

    const result = (yield call(fetchEmployeesScheduled, payload)) as EmployeesScheduledRes;

    yield put(EmployeesScheduledActions.getEmployeesScheduledSuccess(result));
  } catch (e) {
    const { message } = e as Error;

    yield put(EmployeesScheduledActions.getEmployeesScheduledError());
    yield put(EmployeesScheduledActions.clearEmployeesScheduledList());

    if (message === 'Not found') {
      yield put(UtilsActions.openNotification({
        text: 'Not found',
        type: 'info',
      }));
      return;
    }

    yield put(UtilsActions.openNotification({
      text: message || 'Server error',
      type: 'error',
    }));
  }
}

function* watch(): Generator {
  yield takeLatest(EmployeesScheduledActionTypes.GET_EMPLOYEES_SCHEDULED_REQUEST, getEmployeesScheduledRequestSaga);
}

export default watch;
