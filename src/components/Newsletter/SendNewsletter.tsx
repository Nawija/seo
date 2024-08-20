"use client";

import { useState } from "react";
import { MainBtn } from "../Buttons/MainBtn";
import LoadingIcon from "../Buttons/LoadingIcon";
import { FormInput } from "../FormInput";
import { Textarea } from "../Textarea";

export default function SendNewsletter() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("Wyślij");
    const [loading, setLoading] = useState(false);

    const handleSendNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Wysyłam...");
        setLoading(true);

        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subject, content }),
        });

        if (res.ok) {
            setLoading(false);
            setStatus("Wysłano");
            setSubject("");
            setContent("");
        }
    };
    return (
        <form onSubmit={handleSendNewsletter} className="space-y-4">
            <FormInput
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Temat"
                required
            />
            <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Treść wiadomości"
                required
                rows={6}
            />
            {status && (
                <MainBtn
                    type="submit"
                    className="flex items-center justify-center"
                >
                    {loading && <LoadingIcon />}
                    <p>{status}</p>
                </MainBtn>
            )}
        </form>
    );
}
