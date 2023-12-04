import Image from "next/image";
import styles from "./page.module.css";
import Temperature from "@/components/temperature";
import Login from "@/components/auth";
import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex", justifyContent: "flex-end", width:"100%" }}>
        <Profile />
      </div>
      <Login />
      <Temperature />
    </main>
  );
}
