"use client";

import { useState } from "react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setStatusMessage(data.message);
        if (res.ok) setEmail("");
    };

    const handleSendNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subject, content }),
        });

        const data = await res.json();
        setStatusMessage(data.message);
        if (res.ok) {
            setSubject("");
            setContent("");
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSendNewsletter} className="space-y-4">
                <h2 className="text-xl font-semibold">Wyślij newsletter</h2>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Temat"
                    required
                    className="border p-2 rounded w-full"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Treść wiadomości"
                    required
                    className="border p-2 rounded w-full"
                    rows={6}
                />
                <button
                    type="submit"
                    className="bg-emerald-500 text-white p-2 rounded"
                >
                    Wyślij
                </button>
            </form>

            {statusMessage && <p className="mt-4">{statusMessage}</p>}
        </div>
    );
}
