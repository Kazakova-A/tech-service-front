import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';

import { fetchAddJobs, fetchJobsList } from 'api/jobs';
import { EmployeesScheduledActions } from 'store/actions/employeesScheduled';
import { JobsActions } from '../actions/jobs';
import { AddJobsRes, GetJobsRes, JobsActionTypes } from '../types/jobs';
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

function* addJobsRequestSaga(payload: any): Generator {
  try {
    const result = (yield call(fetchAddJobs, payload)) as AddJobsRes;
    yield put(JobsActions.addJobsSuccess(result));
    yield put(EmployeesScheduledActions.getEmployeesScheduledRequest());
  } catch (e) {
    yield put(JobsActions.addJobsError());
  }
}

function* watch(): Generator {
  yield takeLatest(JobsActionTypes.GET_JOBS_LIST_REQUEST, getJobsListRequestSaga);
  yield takeLatest(JobsActionTypes.ADD_JOBS_REQUEST, addJobsRequestSaga);
}

export default watch;
