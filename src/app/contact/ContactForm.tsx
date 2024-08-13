"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import InputField from "./InputField";
import { NeonBtn } from "@/components/Buttons/NeonBtn";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
    const [statusType, setStatusType] = useState<"success" | "error" | null>(
        null
    );
    const router = useRouter(); // Initialize useRouter

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
        setLoading(true); // Start loading animation
        setStatusType(null); // Reset status type

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setStatusType("success"); // Set status type to success
                setFormData({ name: "", email: "", message: "" });

                // Redirect to /success page
                setTimeout(() => {
                    router.push("/success");
                }, 1000); // Redirect after 1 second to allow status message to be seen
            } else {
                setStatus("Failed to send message.");
                setStatusType("error"); // Set status type to error
            }
        } catch (error) {
            setStatus("Failed to send message.");
            setStatusType("error"); // Set status type to error
        } finally {
            setLoading(false); // Stop loading animation
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border border-border-primary rounded-lg text-black p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <NeonBtn type="submit">Send Message</NeonBtn>
            {status && (
                <div className="mt-4 text-sm flex items-center space-x-2">
                    {loading && (
                        <div className="w-4 h-4 border-2 border-t-transparent border-emerald-600 border-solid rounded-full animate-spin"></div>
                    )}
                    <p
                        className={`ml-2 ${
                            statusType === "success"
                                ? "text-green-500"
                                : statusType === "error"
                                ? "text-red-500"
                                : "text-white"
                        }`}
                    >
                        {status}
                    </p>
                </div>
            )}
        </form>
    );
}
