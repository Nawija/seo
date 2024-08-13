"use client";

import { useState } from "react";
import InputField from "./InputField";
import { NeonBtn } from "@/components/Buttons/NeonBtn";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to API
        console.log("Form Data: ", formData);
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
                    className="border border-border-primary rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-black"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <NeonBtn type="submit">Send Message</NeonBtn>
        </form>
    );
}
