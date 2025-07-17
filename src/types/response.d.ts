export type ApiResponse<T = unknown> = {
  success: boolean;
  status: number;
  data: T | null;
  error: string | null;
};
