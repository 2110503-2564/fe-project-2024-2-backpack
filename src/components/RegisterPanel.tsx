"use client";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/libs/slices/authSlice";
import { useState, useRef } from "react";
import { TextField, Typography } from "@mui/material";
import { BlueButton } from "./BlueButton";
import { getUserProfile, userRegister } from "@/libs/auth";
import { useRouter } from "next/navigation";
import { User } from "@/types/User";
export default function RegisterPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser: User = {
        name: name,
        email: email,
        telephoneNumber: telephone,
        password: password,
      };
      console.log(newUser);
      const res = await userRegister(newUser);
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
      setError("Invalid credentials. Register failed");
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
        Register {">"}:D
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
        className="inline-flex flex-col justify-start items-center"
      >
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <TextField
          label="Telephone"
          type="tel"
          fullWidth
          margin="normal"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ marginBottom: 2 }}
            fontSize={15}
          >
            {error}
          </Typography>
        )}
        <div className="w-3/5">
          <BlueButton text="Register" clickto={handleDivClick} />
        </div>
      </form>
    </div>
  );
}
