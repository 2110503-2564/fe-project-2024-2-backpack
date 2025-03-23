"use client"
// import { signIn } from "next-auth/react";
import { useState, useRef } from "react";
import { TextField, Typography} from "@mui/material";
import { BlueButton } from "./BlueButton";

// import { useRouter } from "next/router";
export default function RegisterPanel() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [error, setError] = useState<string | null>(null);
    // const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Here, you would typically send the form data to your API to create the user
        // For now, we'll log it to the console.
        if (!email || !password || !name || !telephone) {
            setError("All fields are required");
            return;
        }

        try {
            // Simulate successful registration (replace with actual API call)
            console.log("User registered:", { email, password, name, telephone });
            // Redirect to login or dashboard
            // router.push("/login");
        } catch (error) {
            setError("Registration failed, please try again.");
        }
    };

    const handleDivClick = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();  // Triggers the form submit
        }
    };
    return (
        <div className="bg-sky-100/40 w-2/3 lg:w-1/2 h-1/2 px-4 py-4 rounded-[30px] outline outline-[2px] outline-offset-[-2px] outline-white inline-flex flex-col justify-start items-center gap-1 overflow-hidden">
            <div className="w-full text-center justify-start text-white text-2xl font-bold"
             style={{ WebkitTextStroke: '2px black', color: 'white' }}>
                Register {'>'}:D
            </div>


            <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }} className="inline-flex flex-col justify-start items-center">
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
                    <Typography variant="body2" color="error" align="center" sx={{ marginTop: 2 }}>
                        {error}
                    </Typography>
                )}
                <div className="w-3/5">
                    <BlueButton text="Register" clickto={handleDivClick} />
                </div>
            </form>
        </div>
    )

}