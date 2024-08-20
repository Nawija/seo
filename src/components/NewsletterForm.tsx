"use client";

import { useState } from "react";
import { SecondBtn } from "./Buttons/SecondBtn";

export default function NewsletterForm() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subject, content }),
        });

        const data = await res.json();

        if (res.ok) {
            setStatusMessage("Newsletter sent successfully!");
            setSubject("");
            setContent("");
        } else {
            setStatusMessage(`Failed to send newsletter: ${data.message}`);
        }
    };

    return (
        <div className="text-black">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    required
                    className="border p-2 rounded"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    required
                    className="border p-2 rounded"
                    rows={10}
                />
                <SecondBtn type="submit" className="w-max ml-auto">
                    Send Newsletter
                </SecondBtn>
            </form>
            {statusMessage && <p className="mt-4">{statusMessage}</p>}
        </div>
    );
}
