/// <reference types="nativewind/types" />

type ApiResponse<T> = {
  status: 200;
  message: string;
  data: T;
};
