import { GetJobsRes } from 'store/types/jobs';

export interface JobsState {
  isLoading: boolean;
  jobs: GetJobsRes[];
}
