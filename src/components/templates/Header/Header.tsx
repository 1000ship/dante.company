import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { Link } from "locales/navigation";
import { FC } from "react";
import AuthState from "./AuthState";
import LanguageSelector from "./LanguageSelector";

const Header: FC = async () => {
  const pathname: string = "/";

  return (
    <div className="fixed inset-x-0 top-0 z-header flex items-start justify-between px-4 pt-2 text-black md:px-6 md:pt-4 dark:text-white">
      <div className="flex gap-6">
        <Link href="/" className="hidden font-bold tracking-tighter md:block">
          DANTE COMPANY
        </Link>
        <ul className="flex gap-4">
          <li className="relative">
            {pathname === "/" && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-twilight dark:bg-blossom" />
            )}
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            {pathname === "/games" && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-twilight dark:bg-blossom" />
            )}
            <Link href="/games">Games</Link>
          </li>
          <li className="relative">
            <Link href="https://blog.dante.company">
              Blog
              <ArrowTopRightOnSquareIcon className="ml-1 inline-block h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-2 md:gap-6">
        {/* Language Selector */}
        <LanguageSelector />

        {/* Auth State */}
        <AuthState />
      </div>
    </div>
  );
};

export default Header;
