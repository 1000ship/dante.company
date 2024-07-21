"use client";

import { NewsletterAPI } from "../../../api";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { PropagateLoader } from "react-spinners";
import { getNewsletterErrorMessage } from "./utils";

interface Form {
  email: string;
  confirmationCode: string;
}

const NewsletterSection: FC = () => {
  const locale = useLocale();
  const t = useTranslations("games");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    mode: "all",
  });

  const {
    mutateAsync: registerEmail,
    isSuccess: isRegisterSuccess,
    isLoading: isRegisterLoading,
    isError: isRegisterError,
    error: registerError,
    reset: resetRegister,
  } = NewsletterAPI.useRegister();

  const {
    mutateAsync: confirmEmail,
    isSuccess: isConfirmSuccess,
    isLoading: isConfirmLoading,
    isError: isConfirmError,
    error: confirmError,
    reset: resetConfirm,
  } = NewsletterAPI.useConfirm();

  const responseError = isConfirmError ? confirmError : registerError;
  const retry = isConfirmError ? resetConfirm : resetRegister;

  const onRegisterSubmit = handleSubmit(async (data) => {
    await registerEmail({ email: data.email, locale });
  });

  const onConfirmationSubmit = handleSubmit(async (data) => {
    await confirmEmail({
      email: data.email,
      confirmationCode: data.confirmationCode,
    });
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
        {t("NewsletterSection.heading")}
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700 dark:text-gray-300">
        {t("NewsletterSection.subHeading")}
      </p>
      <div className="relative mx-auto mt-10 max-w-md bg-red-500">
        <AnimatePresence>
          {isConfirmLoading || isRegisterLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 my-4 flex w-full justify-center"
            >
              <PropagateLoader color="gray" />
            </motion.div>
          ) : isRegisterError || isConfirmError ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded p-2 text-lg"
            >
              <span className="flex items-center gap-2 font-medium">
                <ExclamationCircleIcon className="h-5 w-5" color="red" />
                {getNewsletterErrorMessage(responseError, locale)}
              </span>
              <button
                onClick={retry}
                className="rounded bg-twilight-600 px-2 py-1 font-bold text-white transition hover:bg-twilight-700 active:bg-twilight-800 dark:bg-blossom-600 dark:hover:bg-blossom-700 dark:active:bg-blossom-800"
              >
                {t("NewsletterSection.buttonTryAgain")}
              </button>
            </motion.div>
          ) : isConfirmSuccess ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex h-12 items-center justify-center gap-2 rounded border border-green-500 p-2 text-lg font-medium text-green-500"
            >
              <CheckIcon className="h-6 w-6" />
              <span>{t("NewsletterSection.done")}</span>
            </motion.div>
          ) : isRegisterSuccess ? (
            <motion.form
              key="confirmation-form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 h-12 gap-2 p-2 text-center text-lg"
              onSubmit={onConfirmationSubmit}
            >
              <div className="mb-2 text-base">
                {t("NewsletterSection.notificationCheckEmail")}
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="confirmation-code" className="sr-only">
                  Email address
                </label>
                <input
                  id="confirmation-code"
                  type="string"
                  autoComplete="confirmation-code"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-black disabled:opacity-50 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-white"
                  placeholder={t(
                    "NewsletterSection.confirmationCodePlaceholder"
                  )}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  size={20}
                  maxLength={6}
                  {...register("confirmationCode", {
                    required: true,
                  })}
                  disabled={isConfirmLoading}
                />
                <button
                  type="submit"
                  className="relative flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus-visible:outline-white"
                  disabled={
                    isConfirmLoading || !!errors.confirmationCode?.message
                  }
                >
                  {t("NewsletterSection.buttonConfirm")}
                </button>
              </div>
              {errors.confirmationCode?.message && (
                <p className="m-1 text-sm text-red-500">
                  {errors.confirmationCode.message}
                </p>
              )}
            </motion.form>
          ) : (
            <motion.form
              key="register-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={onRegisterSubmit}
              className="absolute inset-0"
            >
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email", {
                    required: true,
                    validate: (value) => {
                      return value.includes("@")
                        ? true
                        : t("NewsletterSection.emailErrorMessage");
                    },
                  })}
                  id="email-address"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-black disabled:opacity-50 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-white"
                  placeholder={t("NewsletterSection.emailPlaceholder")}
                  size={30}
                  minLength={5}
                  maxLength={320}
                  type="email"
                  autoComplete="email"
                  disabled={isRegisterLoading}
                />
                <button
                  type="submit"
                  className="relative flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus-visible:outline-white"
                  disabled={isRegisterLoading || !!errors.email?.message}
                >
                  {t("NewsletterSection.buttonSubscribe")}
                </button>
              </div>
              {errors.email?.message && (
                <p className="m-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsletterSection;
