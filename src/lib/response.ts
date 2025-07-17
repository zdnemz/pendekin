import { NextResponse } from "next/server";

export function response<T = unknown>(
  success: boolean,
  statusCode: number,
  payload: T
) {
  return NextResponse.json({
    success,
    status: statusCode,
    data: success ? payload : null,
    error: success ? null : payload,
  });
}
