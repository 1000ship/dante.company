"use server";

import { AlreadyExistException } from "errors/prisma";
import { redirect } from "next/navigation";
import { prisma } from "utils/prisma";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { hashPassword } from "../utils";

export async function register(
  prevState: string | undefined,
  formData: FormData
) {
  const { success, data, error } = zfd
    .formData({
      email: z
        .string({
          errorMap: () => ({ message: "이메일 형식이 올바르지 않습니다." }),
        })
        .email()
        .max(512),
      password: z
        .string({
          errorMap: () => ({ message: "비밀번호는 6자 이상이어야 합니다." }),
        })
        .min(6)
        .max(512),
      name: z
        .string({
          errorMap: () => ({
            message: "이름은 2자 이상 128자 이하여야 합니다.",
          }),
        })
        .min(2)
        .max(128),
    })
    .safeParse(formData);

  if (success) {
    try {
      await prisma.$transaction(async ($tx) => {
        const existUser = await $tx.user.findUnique({
          where: { email: data.email },
        });
        if (existUser) throw new AlreadyExistException("email");
        const { salt, hash } = await hashPassword(data.password);
        await $tx.user.create({
          data: {
            email: data.email,
            name: data.name,
            password: hash,
            passwordSalt: salt,
          },
        });
      });
    } catch (error) {
      if (error instanceof AlreadyExistException) {
        return "이미 가입된 이메일입니다.";
      }
      return "회원가입 중 오류가 발생했습니다. 다시 시도해주세요.";
    }

    redirect("/signin");
  } else {
    return error.issues[0].message;
  }
}
