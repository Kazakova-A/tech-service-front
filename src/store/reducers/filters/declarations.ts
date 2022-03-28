import { Option, FiltersOptions } from 'store/types/filters';

export interface FiltersState {
  zip: Option;
  type: Option;
  brand: Option;
  brandOptions: FiltersOptions[],
  typeOptions: FiltersOptions[],
  isLoading: boolean,
}
