export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV ?? "development";
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
export const AUTH_SALT_ROUND = process.env.AUTH_SALT_ROUND
  ? +process.env.AUTH_SALT_ROUND
  : 0;
