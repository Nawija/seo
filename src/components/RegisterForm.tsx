"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MainBtn } from "./Buttons/MainBtn";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1); // 1: Rejestracja, 2: Weryfikacja kodu
    const [error, setError] = useState(""); // Do przechowywania błędów
    const [isCodeValid, setIsCodeValid] = useState(true); // Do dynamicznego podświetlenia pola kodu
    const [sentCode, setSentCode] = useState<number | null>(null); // Przechowywanie kodu wysłanego na e-mail
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
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
            console.log(data);

            router.push("/login");
        } else {
            setIsCodeValid(false); // Podświetlenie pola na czerwono
            setError("The code does not match the one sent to your email!");
        }
    };

    return (
        <div>
            {step === 1 && (
                <form
                    onSubmit={handleRegister}
                    className="flex items-center justify-center flex-col space-y-4 mt-6 lg:mt-12"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <MainBtn type="submit">Register</MainBtn>
                </form>
            )}

            {step === 2 && (
                <form
                    onSubmit={handleVerifyCode}
                    className="flex items-center justify-center flex-col space-y-4 mt-6 lg:mt-12 anim-opacity"
                >
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                            setIsCodeValid(true); // Resetowanie podświetlenia
                        }}
                        placeholder="Verification Code"
                        required
                        style={{
                            borderColor: isCodeValid ? "initial" : "red", // Dynamiczne podświetlenie
                        }}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <MainBtn type="submit">Verify Code</MainBtn>
                </form>
            )}
        </div>
    );
}
