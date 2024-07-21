import { useTranslations } from "locales/server";
import { getLocale } from "next-intl/server";
import { Link } from "../../locales/navigation";

const NotFoundPage = async () => {
  const locale = await getLocale();
  const t = await useTranslations("common");

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
      <div className="text-center">
        <p className="text-base font-semibold text-blossom-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          {t("404.title")}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
          {t("404.description")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-blossom-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blossom-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blossom-600"
          >
            {t("404.buttonBack")}
          </Link>
          <a
            href="mailto:contact@dante.company"
            className="text-sm font-semibold  text-gray-900 dark:text-gray-100"
          >
            {t("404.buttonContact")}
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
