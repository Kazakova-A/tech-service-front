import { BASE_URL } from 'utils/configs';

const FILTERS = `${BASE_URL}/filters`;
const JOBS = `${BASE_URL}/jobs`;

export default {
  getEmployeesByZip: `${FILTERS}/zip`,
  getFilteredEmployeesSchedule: `${JOBS}`,
  brand: `${FILTERS}/brands`,
  type: `${FILTERS}/types`,
  zip: `${FILTERS}/zip`,
};
