import { MainBtn } from "@/components/Buttons/MainBtn";
import SubscribeNewsletter from "@/components/Newsletter/SubscribeNewsletter";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="max-w-screen-md mx-auto p-8 anim-opacity">
            <Link href="/admin/newsletter">
                <MainBtn>Wróć</MainBtn>
            </Link>
            <h2 className="text-xl font-semibold my-6 lg:my-10">
                Dodaj do newslettera
            </h2>
            <SubscribeNewsletter />
        </div>
    );
}
