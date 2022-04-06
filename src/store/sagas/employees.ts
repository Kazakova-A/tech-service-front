import {
  put,
  takeLatest,
  select,
  call,
} from 'redux-saga/effects';

import { fetchEmployees } from 'api/employees';
import { EmployeesActions } from '../actions/employees';
import { EmployeesActionTypes, GetEmployeesReq } from '../types/employees';
import { UtilsActions } from '../actions/utils';
import { RootState } from '../reducers';

function* getEmployeesRequestSaga(): Generator {
  try {
    const { zip, type, brand } = (yield select((state: RootState) => state.filters)) as any;

    const payload: GetEmployeesReq = {
      zip: Number(zip.selected?.value),
      type: type.selected?.value,
      brand: brand.selected?.value,
    };

    const result = (yield call(fetchEmployees, payload)) as { [key: string]: any };

    yield put(EmployeesActions.getEmployeesSuccess(result));
  } catch (e) {
    const { message } = e as Error;

    yield put(EmployeesActions.getEmployeesError());
    yield put(EmployeesActions.clearList());

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
  yield takeLatest(EmployeesActionTypes.GET_EMPLOYEES_REQUEST, getEmployeesRequestSaga);
}

export default watch;
