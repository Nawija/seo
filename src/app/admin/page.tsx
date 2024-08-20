import { SecondBtn } from "@/components/Buttons/SecondBtn";
import Link from "next/link";

export default function AdminPage() {
    return (
        <>
            <h1 className="py-12 text-center lg:text-5xl text-4xl text-white font-bold">
                Wybierz dobrze
            </h1>
            <div className="max-w-screen-md mx-auto p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4">
                    <Link href="/admin/newsletter">
                        <SecondBtn>Newsletter</SecondBtn>
                    </Link>
                    <Link href="/admin/newsletter">
                        <SecondBtn>Newsletter</SecondBtn>
                    </Link>
                    <Link href="/admin/newsletter">
                        <SecondBtn>Newsletter</SecondBtn>
                    </Link>
                    <Link href="/admin/newsletter">

                    </Link>
                </div>
            </div>
        </>
    );
}
