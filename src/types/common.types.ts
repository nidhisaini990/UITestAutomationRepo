export interface ApiResponse<T> {
  status: number;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface SortParams {
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: string | number | boolean;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
