"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "../../../locales/navigation";
import { FC } from "react";

const PencilPickerSection: FC = () => {
  const t = useTranslations("games");
  const locale = useLocale();

  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative isolate flex flex-col justify-evenly overflow-hidden bg-blossom-50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:flex-row lg:gap-x-20 lg:px-16 lg:pt-0 xl:px-24 dark:bg-twilight-950">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={1024}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              className="invisible dark:visible"
            >
              <stop stopColor="#9089fc" />
              <stop offset={1} stopColor="#ff80b5" />
            </radialGradient>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              className="visible dark:invisible"
            >
              <stop stopColor="#ff80b5" />
              <stop offset={1} stopColor="#9089fc" />
            </radialGradient>
          </defs>
        </svg>
        <div className="flex flex-col justify-center text-center lg:mx-0 lg:max-w-md lg:flex-auto lg:py-32 lg:text-left xl:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
            {t.rich("PencilPickerSection.title", {
              strong: (children) => (
                <strong className="text-twilight-600 dark:text-blossom">
                  {children}
                </strong>
              ),
            })}
          </h2>
          <p className="mt-6 break-keep text-lg leading-8 text-gray-700 dark:text-gray-300">
            {t.rich("PencilPickerSection.intro", {
              strong: (children) => (
                <strong className="text-twilight-600 dark:text-blossom">
                  {children}
                </strong>
              ),
            })}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center lg:justify-start">
            <Link
              href="https://games.dante.company/pencil-picker"
              target="_blank"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-blossom-600 dark:text-white dark:hover:bg-blossom-700"
            >
              {t("PencilPickerSection.getStarted")}
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=company.dante.games.pencilpicker"
              target="_blank"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-blossom-600 dark:text-white dark:hover:bg-blossom-700"
            >
              {t("PencilPickerSection.downloadAndroid")}
            </Link>
            <Link
              href="https://apps.apple.com/kr/app/pencil-picker/id6474534592"
              target="_blank"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-blossom-600 dark:text-white dark:hover:bg-blossom-700"
            >
              {t("PencilPickerSection.downloadiOS")}
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href={`https://games.dante.company/pencil-picker/${locale}/private-policy.html`}
              target="_blank"
              className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-white/10"
            >
              {t("PencilPickerSection.privatePrivacy")}
            </Link>
          </div>
        </div>
        <div className="mt-16 h-[350px] md:h-[500px] lg:my-8">
          <video
            className="mx-auto h-full w-2/3 rounded-t-lg object-cover object-top shadow ring-1 ring-white/10 md:w-1/2 lg:w-full lg:rounded-b-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/pencil-picker.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PencilPickerSection;
