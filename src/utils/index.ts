const verirficaSePossuiCafe = (temperatura: number): boolean => {
  if (temperatura >= 40 && temperatura <= 60) {
    return true;
  }
  return false;
};

import { NextAuthOptions } from "next-auth";
import GoogleProviders from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export interface Profile {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  hd: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
}

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProviders({
      clientId:
        "495002907737-vssvhdghqaad564de318sjqujoe0aer4.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          include_granted_scopes: true,
        },
      },
    }),
  ],
};
