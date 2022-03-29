import { Option, FiltersOptions } from 'store/types/filters';

export interface FiltersState {
  zip: {
    selected: Option | null;
    inputValue: string;
    options: FiltersOptions[];
  };
  brand: {
    selected: Option | null;
    inputValue: string;
    options: FiltersOptions[];
  };
  type: {
    selected: Option | null;
    inputValue: string;
    options: FiltersOptions[];
  };
  isLoading: boolean,
}
