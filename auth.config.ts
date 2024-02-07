import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schema";
// import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail, getUserById } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const checkPassword = user.password === password;
          if (checkPassword) return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true; //stop checking if using provider

      return true;
    },

    async session({ token, session }: any) {
      if (session.user) {
        session.user.id = token.sub;
        if (token.isAdmin) {
          session.user.role = "user";
        } else {
          session.user.role = "admin";
        }
      }
      return session;
    },
    async jwt({ token }) {
      //if no id means it is logged out
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      token.isAdmin = existingUser?.isAdmin;
      if (!existingUser) return token; //if user does not exist
      return token;
    },
  },
} satisfies NextAuthConfig;
