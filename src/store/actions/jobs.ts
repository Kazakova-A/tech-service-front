import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { AddJobsRes, GetJobsRes, JobsActionTypes } from 'store/types/jobs';

export const JobsActions = {
  getJobsListRequest: (): Action<
  JobsActionTypes.GET_JOBS_LIST_REQUEST
  > => createAction(
    JobsActionTypes.GET_JOBS_LIST_REQUEST,
  ),
  getJobsListSuccess: (payload: GetJobsRes[]): Action<
  JobsActionTypes.GET_JOBS_LIST_SUCCESS,
  GetJobsRes[]
  > => createAction(
    JobsActionTypes.GET_JOBS_LIST_SUCCESS,
    payload,
  ),
  getJobsListError: (): Action<
  JobsActionTypes.GET_JOBS_LIST_ERROR
  > => createAction(
    JobsActionTypes.GET_JOBS_LIST_ERROR,
  ),

  addJobsRequest: (payload: AddJobsRes): Action<
  JobsActionTypes.ADD_JOBS_REQUEST
  > => createAction(
    JobsActionTypes.ADD_JOBS_REQUEST,
    payload,
  ),
  addJobsSuccess: (payload: AddJobsRes): Action<
  JobsActionTypes.ADD_JOBS_SUCCESS,
  AddJobsRes
  > => createAction(
    JobsActionTypes.ADD_JOBS_SUCCESS,
    payload,
  ),
  addJobsError: (): Action<
  JobsActionTypes.ADD_JOBS_ERROR
  > => createAction(
    JobsActionTypes.ADD_JOBS_ERROR,
  ),

  clearList: (): Action<
  JobsActionTypes.CLEAR_LIST
  > => createAction(
    JobsActionTypes.CLEAR_LIST,
  ),
};

export type JobsActionsUnion = ActionsUnion<
    typeof JobsActions>;
