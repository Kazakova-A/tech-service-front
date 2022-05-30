import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';

import { fetchJobsList } from 'api/jobs';
import { JobsActions } from '../actions/jobs';
import { GetJobsRes, JobsActionTypes } from '../types/jobs';
import { UtilsActions } from '../actions/utils';

function* getJobsListRequestSaga(): Generator {
  try {
    const result = (yield call(fetchJobsList)) as GetJobsRes[];
    yield put(JobsActions.getJobsListSuccess(result));
  } catch (e) {
    const { message } = e as Error;

    yield put(JobsActions.getJobsListError());
    yield put(JobsActions.clearList());

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
  yield takeLatest(JobsActionTypes.GET_JOBS_LIST_REQUEST, getJobsListRequestSaga);
}

export default watch;
