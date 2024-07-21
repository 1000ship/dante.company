"use client";

import { useTranslations } from "next-intl";

export default function ResetPassword() {
  const t = useTranslations("auth");

  return (
    <>
      {/* Page header */}
      <div className="mx-auto max-w-3xl pb-12 text-center">
        {/* Page title */}
        <h1 className="bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-4xl font-black text-transparent dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60">
          {t("resetPassword.title")}
        </h1>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-sm">
        <form>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                {t("resetPassword.email")}
              </label>
              <input
                id="email"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800"
                type="email"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-twilight px-4 py-2 font-semibold text-white transition-colors hover:bg-twilight-600 dark:bg-blossom-600 dark:hover:bg-blossom-700">
              {t("resetPassword.reset")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
