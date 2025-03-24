"use client";
import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store';

export default function Home() {
  const { token, role } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      {
        token ? (
          role === "admin" ? "welcome admin!!" : "welcome user!!"
        ) : (
          "pls log in!!"
        )
      }
    </div>
  );
}
