import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { fetchFilterOptions } from 'api/filters';
import { PickAction } from 'store/helpers/redux';
import { FiltersActions, FiltersActionsUnion } from '../actions/filters';
import { FiltersActionTypes, FilterOptionsRes, FiltersOptions } from '../types/filters';

function* fetchFilterOptionsSaga(action: PickAction<
FiltersActionsUnion, FiltersActionTypes.GET_FILTER_OPTIONS_REQUEST>): Generator {
  try {
    const { payload } = action;
    const result = (yield call(fetchFilterOptions, payload)) as FiltersOptions[];
    const successPayload: FilterOptionsRes = {
      options: result,
      name: payload,
    };
    yield put(FiltersActions.getFilterOptionsSuccess(successPayload));
  } catch (error) {
    yield put(FiltersActions.getFilterOptionsError());
  }
}

function* watch(): Generator {
  yield takeLatest(FiltersActionTypes.GET_FILTER_OPTIONS_REQUEST, fetchFilterOptionsSaga);
}

export default watch;
