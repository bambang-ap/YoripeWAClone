/// <reference types="nativewind/types" />

type ApiResponse<T> = {
  status: 200;
  message: string;
  data: T;
};

type ApiResponsePagination<T> = ApiResponse<{
  page: number;
  totalPage: number;
  totalCount: number;
  data: T[];
}>;
