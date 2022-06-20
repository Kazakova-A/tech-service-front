import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { CurrentAddressActionTypes, CurrentAddressRes } from 'store/types/currentAddress';
import { CurrentAddressActions } from 'store/actions/currentAddress';
import { fetchCurrentAddress } from 'api/currentAddress';

function* currentAddressRequestSaga(payload: any): Generator {
  try {
    const result = (yield call(fetchCurrentAddress, payload)) as CurrentAddressRes;
    yield put(CurrentAddressActions.getCurrentAddressSuccess(result));
  } catch (e) {
    yield put(CurrentAddressActions.getCurrentAddressError());
  }
}

function* watch(): Generator {
  yield takeLatest(CurrentAddressActionTypes.GET_CURRENT_ADDRESS_REQUEST, currentAddressRequestSaga);
}

export default watch;
