"use client";

import { NEWSLETTER_LIST } from "@/constants/newsletter";
import { useState } from "react";

export default function NewsletterForm() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [emails, setEmails] = useState("");
    const [isFileUpload, setIsFileUpload] = useState(false);
    const [textMailUpload, setTextMailUpload] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let emailList: string[] = [];

        if (isFileUpload && file) {
            const fileContent = await file.text();
            emailList = fileContent
                .split("\n")
                .map((email) => email.trim())
                .filter((email) => email);
        } else if (emails) {
            emailList = emails
                .split(",")
                .map((email) => email.trim())
                .filter((email) => email);
        } else {
            // Jeśli żadna opcja nie jest zaznaczona, użyj domyślnej listy e-maili
            emailList = [];
        }

        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subject, content, emailList }),
        });

        const data = await res.json();

        if (res.ok) {
            setStatusMessage("Newsletter sent successfully!");
            setSubject("");
            setContent("");
            setEmails("");
            setFile(null);
        } else {
            setStatusMessage(`Failed to send newsletter: ${data.message}`);
        }
    };

    return (
        <div className="flex items-start justify-start flex-col lg:flex-row gap-3 text-black">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 w-full"
            >
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

                <button
                    type="submit"
                    className="bg-emerald-600 text-white p-2 rounded"
                >
                    Send Newsletter
                </button>
            </form>
            <div className="w-max lg:order-first transition-all">
                {!textMailUpload && !isFileUpload && (
                    <div className="bg-white text-black rounded-lg">
                        <p className="mb-2 text-lg font-bold px-4 pt-4">
                            Auto generated:
                        </p>
                        <ul className="space-y-1 max-h-[40vh] overflow-scroll px-4 w-full lg:max-w-64">
                            {NEWSLETTER_LIST.map((newsletter) => (
                                <li>{newsletter.mail}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="py-2">
                    <input
                        type="checkbox"
                        id="textMailUpload"
                        checked={textMailUpload}
                        onChange={(e) => setTextMailUpload(e.target.checked)}
                    />
                    <label
                        htmlFor="textMailUpload"
                        className="ml-2 text-white/80"
                    >
                        Send text
                    </label>
                </div>

                {textMailUpload && (
                    <textarea
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                        placeholder="Emails (comma separated)"
                        className="border p-2 rounded w-64"
                    />
                )}
                <div className="py-2">
                    <input
                        type="checkbox"
                        id="fileUpload"
                        checked={isFileUpload}
                        onChange={(e) => setIsFileUpload(e.target.checked)}
                    />
                    <label htmlFor="fileUpload" className="ml-2 text-white/80 ">
                        Send from file .txt
                    </label>
                </div>

                {isFileUpload && (
                    <input
                        type="file"
                        accept=".txt"
                        onChange={(e) => {
                            if (e.target.files) {
                                setFile(e.target.files[0]);
                            }
                        }}
                        className="border bg-white text-black p-2 rounded w-64"
                    />
                )}
            </div>
            {statusMessage && <p className="mt-4">{statusMessage}</p>}
        </div>
    );
}
