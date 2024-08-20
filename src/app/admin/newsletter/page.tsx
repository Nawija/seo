import { MainBtn } from "@/components/Buttons/MainBtn";
import SendNewsletter from "@/components/Newsletter/SendNewsletter";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="max-w-screen-md mx-auto p-8 anim-opacity">
            <Link href="/admin/newsletter/dodaj">
                <MainBtn>Dodaj maila</MainBtn>
            </Link>
            <h2 className="text-xl font-semibold my-6 lg:my-10">
                Wyślij newsletter
            </h2>
            <SendNewsletter />
        </div>
    );
}
