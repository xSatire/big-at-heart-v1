"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { logout } from "@/actions/access";

const NavBar = () => {
  const session = useSession();
  let isLoggedIn = !!session.data;
  let isAdmin = false;

  if (isLoggedIn && session?.data?.user?.role == "admin") {
    isAdmin = true;
  }

  return (
    <nav className="flex justify-between items-center w-full pt-3 mb-12">
      <Link href="/" className="flex items-center">
        <Image src="/logo.webp" alt="logo" width={66} height={66} />
        <h2 className="logo_text">Big At Heart</h2>
      </Link>
      <div className="flex gap-x-7 items-center">
        <Link href="/events" className="font-semibold font-satoshi">
          Upcoming Events
        </Link>
        {isAdmin && (
          <Link href="/dashboard" className="font-semibold font-satoshi">
            Dashboard
          </Link>
        )}

        {isLoggedIn && (
          <Link href="/myevents" className="font-semibold font-satoshi">
            Your Events
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/profile" className="font-semibold font-satoshi">
            Profile
          </Link>
        )}
        {!isLoggedIn && (
          <Link href="/login">
            <button className="black_btn">Log In</button>
          </Link>
        )}

        {isLoggedIn && (
          <button
            className="outline_btn"
            onClick={() => {
              logout();
            }}
          >
            {" "}
            Sign Out{" "}
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
