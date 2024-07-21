import { EnglishMessages, fallbackLocale } from "locales";
import {
  getTranslations as _getTranslations,
  getLocale,
} from "next-intl/server";

type Namespace = keyof typeof EnglishMessages;

/**
 * For server-side rendering
 */
export const useTranslations = async (namespace: Namespace) => {
  const locale = await getLocale();
  return await _getTranslations({
    locale: locale ?? fallbackLocale,
    namespace,
  });
};
