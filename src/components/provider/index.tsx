"use client";
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";


interface Props{
    children: ReactNode;
    // session: Session;
}
export const Provider = (Props: Props) => {
  return (
    <SessionProvider>
        {Props.children}
    </SessionProvider>
  )
};
