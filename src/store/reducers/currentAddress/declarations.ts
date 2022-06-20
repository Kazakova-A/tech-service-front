import { CurrentAddressRes } from 'store/types/currentAddress';

// TODO: set valid types
export interface CurrentAddressState {
  isLoading: boolean;
  currentAddresses: CurrentAddressRes[];
}
