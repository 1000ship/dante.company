"use server";

import { signIn } from "utils/auth";
import { AuthError } from "next-auth";

export async function signInViaEmail(
  prevState: string | undefined,
  formData: FormData
) {
  let isRedirectError = false;

  try {
    await signIn("credentials", formData);
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "이메일 혹은 비밀번호가 일치하지 않습니다.";
      }
    } else if (error.message === "NEXT_REDIRECT") {
      isRedirectError = true;
    } else {
      return "알 수 없는 문제가 발생했습니다.";
    }
  }

  if (isRedirectError) await signIn("credentials", formData);
}

export async function signInViaGoogle() {
  try {
    await signIn("google");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        default:
          return "알 수 없는 문제가 발생했습니다.";
      }
    }
    throw error;
  }
}

export async function signInViaKakao() {
  try {
    await signIn("kakao");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        default:
          return "알 수 없는 문제가 발생했습니다.";
      }
    }
    throw error;
  }
}
