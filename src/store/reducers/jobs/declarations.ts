import { AddJobsRes, GetJobsRes } from 'store/types/jobs';

export interface JobsState {
  isLoading: boolean;
  jobs: GetJobsRes[];
  addedJobs: AddJobsRes;
}
