interface SuccessResponse<T> {
  success: true;
  data: T[];
  count?: number;
  pagination?: {
    prev?: {
      page: number;
      limit: number;
    };
    next?: {
      page: number;
      limit: number;
    };
  };
}

interface LoginSuccessResponse {
  success: true;
  token: string;
}

interface ErrorResponse {
  success: false;
  message: string;
}

export type BackendResponse<T> = SuccessResponse<T> | LoginSuccessResponse | ErrorResponse;
