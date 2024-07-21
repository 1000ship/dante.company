"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

const SignUpButton = () => {
  const t = useTranslations("auth");
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={classNames(
        "flex w-full items-center justify-center gap-2 rounded-lg bg-twilight px-4 py-2 font-semibold text-white hover:bg-twilight-600 dark:bg-blossom-600 dark:hover:bg-blossom-700 transition-colors",
        { "opacity-50 cursor-not-allowed": pending }
      )}
      disabled={pending}
    >
      {t("common.signup")}
    </button>
  );
};

export default SignUpButton;
