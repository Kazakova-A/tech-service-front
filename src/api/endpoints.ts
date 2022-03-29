import { BASE_URL } from 'utils/configs';

const FILTERS = `${BASE_URL}/filters`;

export default {
  getEmployeesByZip: `${FILTERS}/zip`,
  getEmployeesByTypeBrand: `${FILTERS}/specialization`,
  brand: `${FILTERS}/brands`,
  type: `${FILTERS}/types`,
  zip: `${FILTERS}/zip`,

};
