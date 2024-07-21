"use client";

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signInViaGoogle } from "../signin/actions";
import { GoogleSvg } from "../signin/resources";
import { register } from "./actions";
import SignUpButton from "./partials/signup-button";

export default function SignUp() {
  const t = useTranslations("auth");
  const [errorMessage, dispatch] = useFormState(register, undefined);

  return (
    <>
      {/* Page header */}
      <div className="mx-auto max-w-3xl pb-12 text-center">
        {/* Page title */}
        <h1 className="bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-4xl font-black text-transparent dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60">
          {t("signup.title")}
        </h1>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-sm">
        <form action={dispatch}>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="name"
              >
                {t("signup.name")} <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800"
                type="text"
                required
                minLength={2}
                maxLength={128}
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                {t("signup.email")} <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800"
                type="email"
                required
                maxLength={512}
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="password"
              >
                {t("signup.password")} <span className="text-rose-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800"
                type="password"
                autoComplete="on"
                required
                minLength={6}
                maxLength={512}
              />
            </div>
            {/* <div>
              <label
                className="block text-sm text-slate-300 font-medium mb-1"
                htmlFor="referrer"
              >
                어디서 알게 되셨나요? <span className="text-rose-500">*</span>
              </label>
              <select
                id="referrer"
                className="form-select text-sm py-2 w-full"
                required
              >
                <option value="">선택해주세요</option>
                <option value="search">검색 엔진</option>
                <option value="social-media">소셜 미디어</option>
                <option value="friend">친구</option>
                <option value="other">기타</option>
              </select>
            </div> */}
          </div>
          <div className="mt-6">
            <SignUpButton />
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
            {t("signup.alreadyHaveAccount")}
            <Link
              className="ml-1 font-medium text-twilight transition duration-150 ease-in-out hover:text-twilight-600 dark:text-blossom-600 dark:hover:text-blossom-700"
              href="/signin"
            >
              {t("signup.gotoSignin")}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div
            className="mr-3 grow border-t border-slate-800"
            aria-hidden="true"
          />
          <div className="text-sm italic text-slate-500">or</div>
          <div
            className="ml-3 grow border-t border-slate-800"
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
          {/* <button className="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
            <span className="relative">
              <span className="sr-only">Continue with GitHub</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
              >
                <path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
              </svg>
            </span>
          </button> */}
        </div>
      </div>
    </>
  );
}
