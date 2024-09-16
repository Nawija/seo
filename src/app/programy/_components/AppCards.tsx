// components/AppCard.js
import Link from "next/link";
import { MainBtn } from "@/components/Buttons/MainBtn";

export default function AppCard({
    imgUrl,
    href,
    title,
    desc,
}: {
    imgUrl: string;
    href: string;
    title: string;
    desc: string;
}) {
    return (
        <Link
            href={`/programy/${href}`}
            className="relative p-2 border rounded bg-background-secondary text-center group overflow-hidden"
        >
            <img
                src={imgUrl}
                className="h-80 w-full object-cover group-hover:scale-95 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-lg w-full p-2">
                <div className="absolute top-0 left-0 bg-background-primary w-full h-full -z-10 opacity-40" />
                <h2 className="text-sm text-foreground-primary z-10 uppercase font-bold tracking-widest my-3">
                    {title}
                </h2>
                <p className="mb-3">{desc}</p>
                <div className="mr-auto w-full">
                    <MainBtn>Zobacz</MainBtn>
                </div>
            </div>
        </Link>
    );
}
