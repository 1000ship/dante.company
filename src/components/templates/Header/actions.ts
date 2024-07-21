"use server";

import { signOut as _signOut } from "utils/auth";

export const signOut = async () => {
  await _signOut({ redirect: true });
};
