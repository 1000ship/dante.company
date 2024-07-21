"use client";

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signInViaEmail, signInViaGoogle } from "./actions";
import SignInButton from "./partials/signin-button";
import { GoogleSvg } from "./resources";
import { useTranslations } from "next-intl";

interface Props {
  searchParams?: { error?: string };
}

export default function SignIn(props: Props) {
  const t = useTranslations("auth");
  const error = props?.searchParams?.error;
  const [errorMessage, dispatch] = useFormState(signInViaEmail, undefined);

  return (
    <>
      {/* Page header */}
      <div className="mx-auto max-w-3xl pb-12 text-center">
        {/* Page title */}
        <h1 className="bg-gradient-to-r from-slate-900/60 via-slate-900 to-slate-900/60 bg-clip-text text-4xl font-black text-transparent dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60">
          {t("common.signin")}
        </h1>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-sm">
        {error === "UnverifiedEmailException" && (
          <p className="rounded-md bg-red-500 p-4">
            {t("signin.unverifiedEmailException")}
          </p>
          // <ErrorPanel
          //   error
          //   fallbackMessage="해당 SNS 계정 이메일 중 인증된 이메일이 없습니다. 반드시 본인확인이 완료된 이메일만 사용가능합니다."
          // />
        )}

        <form action={dispatch}>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                {t("signin.email")}
              </label>
              <input
                id="email"
                name="email"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800"
                type="email"
                required
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="password"
                >
                  {t("signin.password")}
                </label>
                {/* TODO: 비밀번호 재설정 페이지 완성 후 연결 */}
                {/* <Link
                  className="ml-2 text-sm font-medium text-twilight transition duration-150 ease-in-out hover:text-twilight-600 dark:text-blossom-600 dark:hover:text-blossom-700"
                  href="/reset-password"
                >
                  {t("signin.forgotPassword")}
                </Link> */}
              </div>
              <input
                id="password"
                name="password"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800"
                type="password"
                autoComplete="on"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <SignInButton />
          </div>
        </form>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {typeof errorMessage === "string" && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>

        <div className="mt-4 text-center">
          <div className="text-sm text-slate-400">
            {t("signin.noAccount")}
            <Link
              className="ml-1 font-medium text-twilight transition duration-150 ease-in-out hover:text-twilight-600 dark:text-blossom-600 dark:hover:text-blossom-700"
              href="/signup"
            >
              {t("signin.gotoSignup")}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div
            className="mr-3 grow border-t border-slate-200 dark:border-slate-800"
            aria-hidden="true"
          />
          <div className="text-sm italic text-slate-500 dark:text-slate-400">
            or
          </div>
          <div
            className="ml-3 grow border-t border-slate-200 dark:border-slate-800"
            aria-hidden="true"
          />
        </div>

        {/* Social login */}
        <div className="flex space-x-3">
          <form action={signInViaGoogle} className="w-full">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2 font-semibold transition-colors duration-150 ease-in-out hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <span className="sr-only">{t("common.signinViaGoogle")}</span>
              <GoogleSvg
                alt="Google"
                className="size-4 rounded-lg fill-slate-800 transition-colors duration-150 ease-in-out hover:fill-slate-900 dark:fill-slate-200 dark:hover:fill-slate-100"
              />
              {t("common.signinViaGoogle")}
            </button>
          </form>
          {/* <form action={signInViaKakao}>
            <button
              type="submit"
              className="btn text-slate-700 dark:text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9"
            >
              <span className="relative">
                <span className="sr-only">Continue with Kakao</span>
                카카오
              </span>
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
}
