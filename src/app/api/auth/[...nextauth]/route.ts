import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({


  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    CredentialsProvider({
      name: "Author Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Пароль", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          console.log("-----------------------------------------");
          console.log(">>> СПРОБА ВХОДУ:", credentials.email);
          console.log(">>> РЕЗУЛЬТАТ БД:", user ? `ЗНАЙДЕНО (ID: ${user.id})` : "НЕ ЗНАЙДЕНО");
          console.log("-----------------------------------------");

          if (user) {
            return {
              id: String(user.id),
              email: user.email,
              name: user.name,
              image: user.image,
            };
          }
        } catch (error) {
          console.error(">>> ПОМИЛКА PRISMA:", error);
        }
        return null;
      }
    })
  ],

  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 днів
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = token.id;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin", 
  },
});

export { handler as GET, handler as POST };