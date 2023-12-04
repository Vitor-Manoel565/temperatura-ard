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
      <>
        <p>Você não está logado</p>
        <button onClick={() => signIn()}>Logar</button>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Você está logado como {session?.user?.email}</p>
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    );
  }


  console.log(session);
  

  return (
    <main>
      <button onClick={handleSignIn}>Logar</button>
    </main>
  );
}
