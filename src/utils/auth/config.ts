import { APP_ENV } from "constants/env";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "../prisma";
import { PrismaAdapter } from "./adapter";
import CredentialsProvider from "./providers/credentials";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  session: {
    // TODO: Credentials 이 database strategy 지원이 안돼서 임시 방편으로 jwt 설정
    strategy: "jwt",
  },
  callbacks: {
    async signIn(params) {
      if (APP_ENV === "production") {
        console.debug(
          "NextAuth.callbacks.signIn -------------------\n",
          JSON.stringify(params, null, 2)
        );
      }
      const { account, profile } = params;

      // Check email verfiied status
      if (account?.provider === "google") {
        if (profile?.email_verified === true) {
          return true;
        } else {
          return "/signin?error=UnverifiedEmailException";
        }
      }
      return true;
    },
    authorized(params) {
      if (APP_ENV === "production") {
        console.debug(
          "NextAuth.callbacks.authorized -------------------\n",
          JSON.stringify(params, null, 2)
        );
      }

      const {
        auth,
        request: { nextUrl },
      } = params;
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      // Restrict access to specific routes
      // if (pathname.match(/^\/videos\/[A-Za-z0-9_-]+\/summarize$/)) {
      //   return isLoggedIn;
      // }

      return true;
    },
    session(params) {
      if (APP_ENV === "production") {
        console.debug(
          "NextAuth.callbacks.session -------------------\n",
          JSON.stringify(params, null, 2)
        );
      }

      const { session, user } = params;
      return session;
    },
  },
  providers: [
    Google({ allowDangerousEmailAccountLinking: true }),
    CredentialsProvider,
  ],
} satisfies NextAuthConfig;
