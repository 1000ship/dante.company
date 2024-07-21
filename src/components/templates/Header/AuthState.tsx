import { useTranslations } from "locales/server";
import Link from "next/link";
import { FC } from "react";
import { auth } from "utils/auth";
import { signOut } from "./actions";

const AuthState: FC = async () => {
  const t = await useTranslations("auth");
  const session = await auth();
  const user = session?.user;

  return (
    <ul className="flex flex-1 items-center justify-end gap-4 text-sm font-medium">
      {user ? (
        <>
          <li className="flex items-center gap-2 text-gray-400">
            {user.image && (
              <img
                src={user.image}
                alt={user.name ?? "User avatar"}
                className="h-6 w-6 rounded-full"
              />
            )}
            <div className="text-nowrap">{user.name}</div>
          </li>
          <li>
            <form action={signOut}>
              <button
                type="submit"
                className="whitespace-nowrap text-slate-300 transition duration-150 ease-in-out hover:text-white"
              >
                {t("common.signout")}
              </button>
            </form>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className="whitespace-nowrap text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
              href="/signin"
            >
              {t("common.signin")}
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              className="whitespace-nowrap text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
              href="/signup"
            >
              {t("common.signup")}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default AuthState;
