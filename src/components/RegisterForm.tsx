"use client";

import { useState } from "react";
import { NeonBtn } from "./Buttons/NeonBtn";
import Link from "next/link";
import { FormInput } from "./FormInput";
import { SecondBtn } from "./Buttons/SecondBtn";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1); // 1: Rejestracja, 2: Weryfikacja kodu
    const [error, setError] = useState(""); // Do przechowywania błędów
    const [sentCode, setSentCode] = useState<number | null>(null); // Przechowywanie kodu wysłanego na e-mail
    const [status, setStatus] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");
        setLoading(true);

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            setStatus("Enter Code");
            setSentCode(data.code); // Przechowywanie wysłanego kodu
            setStep(2);
        } else {
            setError("Registration failed!");
        }
    };

    const handleVerifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(code);
        console.log(sentCode);
        if (parseInt(code) === sentCode) {
            const res = await fetch("/api/verify-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, code }),
            });
            const data = await res.json();
            setStep(3);
        } else {
            setError("Wrong Code!");
        }
    };

    return (
        <div>
            {step === 1 && (
                <form
                    onSubmit={handleRegister}
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <SecondBtn type="submit">
                        {status ? (
                            <div className="text-sm flex items-center space-x-2">
                                {loading && (
                                    <div className="w-4 h-4 border-2 border-t-transparent border-emerald-600 border-solid rounded-full animate-spin"></div>
                                )}
                                <p className={`ml-2`}>{status}</p>
                            </div>
                        ) : (
                            <span>Register</span>
                        )}
                    </SecondBtn>
                </form>
            )}

            {step === 2 && (
                <form
                    onSubmit={handleVerifyCode}
                    className="flex items-center justify-center flex-col space-y-4 mt-6 lg:mt-12 anim-opacity"
                >
                    <div className="relative">
                        <FormInput
                            type="text"
                            value={code}
                            onChange={(e) => {
                                setCode(e.target.value);
                            }}
                            placeholder="Verification Code"
                            required
                        />
                        {error && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 -z-10">
                                <p className="text-red-500 anim-y ">{error}</p>
                            </div>
                        )}
                    </div>
                    <SecondBtn type="submit">Verify Code</SecondBtn>
                </form>
            )}
            {step === 3 && (
                <div className="flex items-center justify-center flex-col space-y-4 mt-6 lg:mt-12 anim-opacity">
                    <p className="text-3xl lg:text-5xl text-green-600 font-bold">
                        Sukcess
                    </p>

                    <Link href="/login">
                        <NeonBtn type="submit">Go to login</NeonBtn>
                    </Link>
                </div>
            )}
        </div>
    );
}
