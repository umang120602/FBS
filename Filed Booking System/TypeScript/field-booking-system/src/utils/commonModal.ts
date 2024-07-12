export interface IApiResponse<T> {
  config?: { [key: string]: string };
  data?: T;
  header?: { [key: string]: string };
  request: { [key: string]: string };
  status: number;
  statusText?: any;
  errors?: any;
}

export interface IGenericSaveResponse {
  id: number;
  message: string;
  success: boolean;
}

