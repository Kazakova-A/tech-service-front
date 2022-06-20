import { BASE_URL } from 'utils/configs';

const FILTERS = `${BASE_URL}/filters`;
const JOBS = `${BASE_URL}/jobs`;
const EMPLOYEES = `${BASE_URL}/employees`;
const JOBSLIST = `${BASE_URL}/jobsList`;

export default {
  getEmployeesByZip: `${FILTERS}/zip`,
  getFilteredEmployeesSchedule: `${JOBS}`,
  getFilteredEmployeesList: `${EMPLOYEES}`,
  getFilteredJobsList: `${JOBSLIST}`,
  brand: `${FILTERS}/brands`,
  type: `${FILTERS}/types`,
  zip: `${FILTERS}/zip`,
  addJob: `${JOBS}`,
  getEmployeesList: `${BASE_URL}/employeesList`,
  getCurrentAddress: `${BASE_URL}/currentAddress`,
};
