import { GetEmployeesRes } from 'store/types/employees';

// TODO: set valid types
export interface EmployeesState {
  isLoading: boolean;
  employees: GetEmployeesRes[];
}
