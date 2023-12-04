import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/utils/index";
import { useSession } from "next-auth/react";
export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) {
    return redirect("/");
  }

  return session;
}

export async function loginIsRequiredServerNoRedirect() {
  const session = await getServerSession(authConfig);
  if (!session) {
    return null;
  }

  return session;
}

// export function loginIsRequiredClient() {
//   if (typeof window !== "undefined") {
//     // const session = useSession();
//     if (!session) {
//       return {
//         redirect: {
//           destination: "/entrar",
//           permanent: false,
//         },
//       };
//     }
//   }
// }
