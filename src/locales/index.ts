import KoreanMessages from "./ko";
import EnglishMessages from "./en";

export { KoreanMessages, EnglishMessages };
export const messages = { ko: KoreanMessages, en: EnglishMessages };

export type Locale = "ko" | "en";

export const fallbackLocale: Locale = "en";
export const supportedLocales: Locale[] = ["ko", "en"];

export const processLocale = (locale: string): Locale => {
  if (locale.startsWith("ko")) {
    return "ko";
  } else if (locale.startsWith("en")) {
    return "en";
  } else {
    return fallbackLocale;
  }
};

export const getMessages = (locale: string) => {
  switch (processLocale(locale)) {
    case "ko":
      return KoreanMessages;
    case "en":
      return EnglishMessages;
  }
};
