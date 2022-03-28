export interface ErrorResponse {
  message: string | null;
}

export interface ResponseObject<T> {
  data: T;
}
