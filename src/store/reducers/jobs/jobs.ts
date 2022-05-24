import { JobsActionTypes } from 'store/types/jobs';
import { JobsActionsUnion } from 'store/actions/jobs';

import { INITIAL_STATE } from './initialState';
import { JobsState } from './declarations';

const jobsReducer = (
  state = INITIAL_STATE,
  action: JobsActionsUnion,
): JobsState => {
  switch (action?.type) {
    case JobsActionTypes.GET_JOBS_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobsActionTypes.GET_JOBS_LIST_SUCCESS: {
      return {
        ...state,
        jobs: action.payload,
        isLoading: false,
      };
    }
    case JobsActionTypes.GET_JOBS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobsActionTypes.CLEAR_LIST: {
      return {
        ...state,
        jobs: [],
      };
    }
    default: return state;
  }
};

export default jobsReducer;
