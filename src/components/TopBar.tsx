"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/libs/store";
import { logOut } from "@/libs/slices/authSlice";
import Image from "next/image";
import AdminTopBar from "./AdminTopBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const { token, role } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/");
    router.refresh;
  };
  const routingToLogIn = () => {
    router.push("/login");
    router.refresh;
  };

  return (
    <div
      className="z-50 fixed top-0 left-0 flex items-center p-8 w-full h-[10vh]
        bg-linear-to-r from-red-300 via-emerald-300 to-sky-300"
    >
      <Link href="/">
        <Image
          src="/img/logo.svg"
          alt="logo"
          objectFit="contain"
          width={200}
          height={0} // Use a proper height value like 50 or 150, or set it to 'auto'
        />
      </Link>
      {token ? role === "admin" ? <AdminTopBar /> : "" : ""}

      <div className="w-full h-fit flex inline-flex justify-end">
        {token ? (
          <div className="flex inline-flex gap-10">
            <Link href="/mybooking">
              <div
                className="cursor-pointer text-black [text-shadow:2px_2px_0px_white,-2px_-2px_0px_white,2px_-2px_0px_white,-2px_2px_0px_white]
                                text-2xl font-bold text-right"
              >
                My Booking
              </div>
            </Link>
            <div
              onClick={handleLogOut}
              className="cursor-pointer text-black [text-shadow:2px_2px_0px_white,-2px_-2px_0px_white,2px_-2px_0px_white,-2px_2px_0px_white]
                                text-2xl font-bold text-right"
            >
              Log Out
            </div>
          </div>
        ) : (
          <div
            onClick={routingToLogIn}
            className="cursor-pointer text-black [text-shadow:2px_2px_0px_white,-2px_-2px_0px_white,2px_-2px_0px_white,-2px_2px_0px_white]
                                text-4xl font-bold text-right"
          >
            Log In
          </div>
        )}
      </div>
    </div>
  );
}
