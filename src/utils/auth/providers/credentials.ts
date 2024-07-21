import { compareSync } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "utils/prisma";
import { z } from "zod";

const CredentialsProvider = Credentials({
  async authorize(credentials) {
    console.debug("CredentialsProvider.authorize -------------------");
    console.debug(credentials);
    const parsedCredentials = z
      .object({ email: z.string().email(), password: z.string().min(6) })
      .safeParse(credentials);

    if (parsedCredentials.success) {
      const { email, password } = parsedCredentials.data;
      const user = await prisma.user.findUnique({
        where: { email },
        include: { accounts: { where: { provider: "" } } },
      });
      if (user?.password) {
        const isValidPassword = compareSync(password, user.password);
        if (isValidPassword) return user;
      }
    }
    return null;
  },
});

export default CredentialsProvider;
