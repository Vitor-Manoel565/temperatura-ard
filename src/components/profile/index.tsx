"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export const Profile = () => {
  const { data: session, status } = useSession();
  console.log(session?.user?.image);

  return (
    <div className="card">
      <div
        className="profileImage"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={session?.user?.image as string}
          width={"fit-content"}
          height={"fit-content"}
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="textContainer">
        <p className="name">
          {status === "loading" ? "Loading..." : session?.user?.name}
        </p>
        <p className="profile">Profile</p>
      </div>
    </div>
  );
};
