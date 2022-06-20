export enum CurrentAddressActionTypes {
  GET_CURRENT_ADDRESS_REQUEST = 'GET_CURRENT_ADDRESS_REQUEST',
  GET_CURRENT_ADDRESS_SUCCESS = 'GET_CURRENT_ADDRESS_SUCCESS',
  GET_CURRENT_ADDRESS_ERROR = 'GET_CURRENT_ADDRESS_ERROR',
}

export interface CurrentAddressRes {
  street: string;
  houseNumber: string;
  city: string;
  state: string;
  parentId: number;
  parentType: string;
}

// export interface CurrentAddressRes {
//   [key: number]: CurrentAddressDataType[];
// }

// type CurrentAddressDataType = {
//   employeesId: number;
// };
