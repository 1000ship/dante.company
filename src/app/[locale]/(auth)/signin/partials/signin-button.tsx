"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import React from "react";
import { useFormStatus } from "react-dom";

const SignInButton = () => {
  const { pending } = useFormStatus();
  const t = useTranslations("auth");

  return (
    <button
      type="submit"
      className={classNames(
        "flex w-full items-center justify-center gap-2 rounded-lg bg-twilight px-4 py-2 font-semibold text-white hover:bg-twilight-600 dark:bg-blossom-600 dark:hover:bg-blossom-700 transition-colors",
        { "opacity-50 cursor-not-allowed": pending }
      )}
      disabled={pending}
    >
      {t("common.signin")}
    </button>
  );
};

export default SignInButton;
