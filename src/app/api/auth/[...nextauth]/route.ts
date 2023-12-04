import { authConfig } from "@/utils/index";
import NextAuth from "next-auth/next";
import GoogleProviders from "next-auth/providers/google";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };