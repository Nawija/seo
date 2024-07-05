"use client";
import Logo from "../Header/Logo";

export default function Footer() {
    return (
        <footer className="p-10 bg-background-primary">
            <Logo closeMenu={() => null} h={25} w={25} />
        </footer>
    );
}
