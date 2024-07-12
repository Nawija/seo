import Image from "next/image";
import Link from "next/link";

export default function Logo({
    closeMenu,
    h,
    w,
    isScrolled,
}: {
    closeMenu: () => void;
    h: number;
    w: number;
    isScrolled: boolean;
}) {
    const logoText = "Seovileo";

    return (
        <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center justify-center"
        >
            <Image
                src="/logo.svg"
                alt="logo seovileo"
                className="mr-1.5"
                height={h || 25}
                width={w || 25}
            />
            <p className="text-xs lg:text-sm font-semibold text-foreground-primary flex">
                {logoText.split("").map((char, index) => (
                    <span
                        key={index}
                        className={`letter ${isScrolled ? 'fade-out' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {char}
                    </span>
                ))}
            </p>
        </Link>
    );
}
