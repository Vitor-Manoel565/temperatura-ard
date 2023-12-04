"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    "use client";
    signIn();
  };

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <p>Você não está logado</p>
        <button onClick={() => signIn()}>Logar</button>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div>
        <p>Você está logado como {session?.user?.email}</p>
        <button onClick={() => signOut()}>Deslogar</button>
      </div>
    );
  }
}
