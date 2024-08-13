"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { SecondBtn } from "@/components/Buttons/SecondBtn";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
    const router = useRouter();

    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
        });
    }, []);

    return (
        <section className="flex flex-col items-center justify-center absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl text-emerald-500 pb-12 -mt-12 uppercase font-medium tracking-widest">
                Success
            </h1>
            <SecondBtn onClick={() => router.back()}>Back to page</SecondBtn>
        </section>
    );
}
