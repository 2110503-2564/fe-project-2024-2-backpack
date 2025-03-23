interface SuccessResponse<T> {
  success: true;
  data: T[];
  count?: bigint;
  pagination?: {
    prev?: {
      page: bigint;
      limit: bigint;
    };
    next?: {
      page: bigint;
      limit: bigint;
    };
  };
}

interface ErrorResponse {
  success: false;
  message: string;
}

export type BackendResponse<T> = SuccessResponse<T> | ErrorResponse;
