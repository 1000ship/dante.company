"use client";

import { useTranslations } from "next-intl";
import React, { FC } from "react";

const Footer: FC = () => {
  const t = useTranslations("common");

  return (
    <footer className="mx-auto w-fit px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="mt-8 flex flex-col items-center gap-1 text-xs leading-5 text-gray-500 dark:text-gray-100 md:order-1 md:mt-0">
        <p>{t("Footer.copyright")}</p>
        <div className="flex gap-3 flex-wrap justify-center whitespace-nowrap">
          <p className="text-gray-600 dark:text-gray-300">
            {t("Footer.companyNameLabel")}{" "}
            <strong className="font-medium">{t("Footer.companyName")}</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {t("Footer.businessRegistrationNumberLabel")}{" "}
            <strong className="font-medium">
              {t("Footer.businessRegistrationNumber")}
            </strong>
          </p>
        </div>
        <div className="flex gap-x-3 gap-y-0 flex-wrap justify-center whitespace-nowrap">
          <p className="text-gray-600 dark:text-gray-300">
            {t("Footer.presidentNameLabel")}{" "}
            <strong className="font-medium">{t("Footer.presidentName")}</strong>
          </p>
          <a
            href="tel:+821023623778"
            className="font-medium text-gray-900 dark:text-gray-50"
          >
            {t("Footer.telephone")}
          </a>
          <a
            href={`mailto:${t("Footer.email")}`}
            className="font-medium text-gray-900 dark:text-gray-50"
          >
            {t("Footer.email")}
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          {t("Footer.address")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
