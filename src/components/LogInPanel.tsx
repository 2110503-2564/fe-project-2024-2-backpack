"use client";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/libs/slices/authSlice";
import { getUserProfile, userLogIn } from "@/libs/auth";
import { useState, useRef } from "react";
import { TextField, Typography } from "@mui/material";
import { BlueButton } from "./BlueButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await userLogIn(email, password);
      if (res.success && "token" in res) {
        const token = res.token;
        const profile = await getUserProfile(token);
        if (profile.success && "data" in profile && "role" in profile.data) {
          dispatch(
            setCredentials({
              token: res.token,
              role: profile.data.role as string,
            }),
          );
          router.push("/");
          router.refresh();
        }
      }
    } catch (error) {
      setError("Invalid credentials");
    }
  };
  const handleDivClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Triggers the form submit
    }
  };
  return (
    <div className="bg-sky-100/40 w-2/3 lg:w-1/2 h-1/2 px-4 py-4 rounded-[30px] outline outline-[2px] outline-offset-[-2px] outline-white inline-flex flex-col justify-start items-center gap-1 overflow-hidden">
      <div
        className="w-full text-center justify-start text-white text-2xl font-bold"
        style={{ WebkitTextStroke: "2px black", color: "white" }}
      >
        Log in? :D
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
        className="inline-flex flex-col justify-start items-center"
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ marginTop: 2 }}
          >
            {error}
          </Typography>
        )}
        <div className="px-4 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-black text-base font-bold">
            no account? pfft lame.
          </div>
          <Link href="/register">
            <div className="justify-start text-red-600 text-base font-boldunderline">
              Create one! CLICK NOW
            </div>
          </Link>
        </div>
        <div className="w-3/5">
          <BlueButton text="Log In" clickto={handleDivClick} />
        </div>
      </form>
    </div>
  );
}
