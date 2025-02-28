"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Locale } from "locales";
import { usePathname, useRouter } from "locales/navigation";
import { useLocale } from "next-intl";
import { useCallback } from "react";

const LanguageSelector = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = useCallback(
    (targetLocale: Locale) => {
      router.replace(pathname, { locale: targetLocale });
    },
    [pathname, router]
  );

  return (
    <div className="relative pr-4">
      <label htmlFor="language" className="sr-only">
        Language
      </label>
      <select
        id="language"
        name="language"
        className="h-full appearance-none rounded-md border-0 bg-transparent p-1 text-right text-sm text-gray-500 outline-none dark:text-gray-400"
        defaultValue={locale}
        onChange={(e) => handleLanguageChange(e.target.value as Locale)}
      >
        <option value="en">English</option>
        <option value="ko">🇰🇷 한국어</option>
      </select>
      <ChevronDownIcon className="absolute right-1 top-1/2 size-4 -translate-y-1/2" />
    </div>
  );
};

export default LanguageSelector;
