"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NeonBtn } from "./Buttons/NeonBtn";
import { FormInput } from "./FormInput";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.ok) {
            router.push("/dashboard");
        } else {
            alert("Login failed!");
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="flex items-center justify-center flex-col space-y-4 mt-6 lg:mt-12"
        >
            <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <FormInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <NeonBtn type="submit">Login</NeonBtn>
        </form>
    );
}
