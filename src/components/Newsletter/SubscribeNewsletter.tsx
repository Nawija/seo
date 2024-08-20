"use client";

import { useState } from "react";
import { MainBtn } from "../Buttons/MainBtn";
import { FormInput } from "../FormInput";

export default function SubscribeNewsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("Zapisz się");
    const [loading, setLoading] = useState(false);
    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Wysyłam...");
        setLoading(true);

        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        if (res.ok) {
            setStatus("Pomyślnie dodano");
            setLoading(false);
            setEmail("");
        }
    };
    return (
        <form onSubmit={handleSubscribe} className="space-y-4">
            <h2 className="text-xl font-semibold">Zapisz się do newslettera</h2>
            <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój e-mail"
                required
            />
            {status && (
                <MainBtn
                    type="submit"
                    className="flex items-center justify-center"
                >
                    {loading && (
                        <div className="w-4 h-4 border-2 border-t-0 border-l-0 border-emerald-600 animate-spin rounded-full mr-2" />
                    )}
                    <p>{status}</p>
                </MainBtn>
            )}
        </form>
    );
}
