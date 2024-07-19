"use client";

import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { SecondBtn } from "./SecondBtn";
import { MdDone } from "react-icons/md";

export default function CopyToClipboard({
    textToCopy,
}: {
    textToCopy: string;
}) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <SecondBtn
            onClick={copyToClipboard}
            className="flex items-center justify-center ml-2 px-1"
        >
            {copied ? <MdDone className="scale-75" size={16} /> : <FaCopy className="scale-75" size={16} />}
        </SecondBtn>
    );
}
