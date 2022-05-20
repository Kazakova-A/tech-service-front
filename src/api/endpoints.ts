import { BASE_URL } from 'utils/configs';

const FILTERS = `${BASE_URL}/filters`;
const JOBS = `${BASE_URL}/jobs`;
const EMPLOYEES = `${BASE_URL}/employees`;

export default {
  getEmployeesByZip: `${FILTERS}/zip`,
  getFilteredEmployeesSchedule: `${JOBS}`,
  getFilteredEmployeesList: `${EMPLOYEES}`,
  brand: `${FILTERS}/brands`,
  type: `${FILTERS}/types`,
  zip: `${FILTERS}/zip`,
};
