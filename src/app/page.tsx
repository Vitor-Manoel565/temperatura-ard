"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Temperature from "@/components/temperature";
import Login from "@/components/auth";
import { Profile } from "@/components/profile";
import { use } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
      <Login />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {session?.user?.name && <Temperature />}
      </div>
    </main>
  );
}
