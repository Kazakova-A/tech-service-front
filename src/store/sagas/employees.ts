import {
  put,
  takeLatest,
  select,
  call,
} from 'redux-saga/effects';

import { fetchEmployeesList } from 'api/employees';
import { EmployeesActions } from '../actions/employees';
import {
  EmployeessActionTypes,
  GetEmployeesRes,
} from '../types/employees';
import { UtilsActions } from '../actions/utils';
import { RootState } from '../reducers';

function* getEmployeesListRequestSaga(): Generator {
  try {
    const { zip, type, brand } = (yield select((state: RootState) => state.filters)) as any;

    const payload: GetEmployeesRes = {
      zip: Number(zip.selected?.value),
      type: type.selected?.value,
      brand: brand.selected?.value,
    };

    const result = (yield call(fetchEmployeesList, payload)) as GetEmployeesRes[];

    yield put(EmployeesActions.getEmployeesListSuccess(result));
  } catch (e) {
    const { message } = e as Error;

    yield put(EmployeesActions.getEmployeesListError());
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
  yield takeLatest(EmployeessActionTypes.GET_EMPLOYEES_LIST_REQUEST, getEmployeesListRequestSaga);
}

export default watch;
