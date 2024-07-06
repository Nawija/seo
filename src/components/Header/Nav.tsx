"use client";

import { NAVIGATION_LINKS } from "@/constants/routers";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    function closeMenu() {
        setShowMenu(false);
    }
    return (
        <header className="w-full z-[998] bg-background-primary relative">
            <nav className="max-w-screen-2xl mx-auto py-4 px-6 flex items-center justify-between">
                <Logo closeMenu={closeMenu} h={25} w={25} />
                <BurgerMenu
                    handleShowMenu={handleShowMenu}
                    showMenu={showMenu}
                />
                <ul
                    className={`${
                        showMenu
                            ? "translate-x-0"
                            : " translate-x-full lg:translate-x-0"
                    } absolute lg:static transition-transform top-full left-0 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-max p-10 lg:p-0 w-full flex items-center justify-center flex-col lg:flex-row bg-background-primary`}
                >
                    {NAVIGATION_LINKS.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                className="capitalize font-medium text-sm"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

function BurgerMenu({
    handleShowMenu,
    showMenu,
}: {
    handleShowMenu: () => void;
    showMenu: boolean;
}) {
    return (
        <button
            onClick={handleShowMenu}
            className="flex flex-col items-start justify-center space-y-1.5 lg:hidden"
        >
            <div
                className={`${
                    showMenu ? "rotate-[405deg] translate-y-1.5" : ""
                } w-4 h-px transition-transform bg-foreground-primary`}
            />
            <div
                className={`${
                    showMenu ? "opacity-0" : ""
                } w-4 h-px transition-opacity bg-foreground-primary`}
            />
            <div
                className={`${
                    showMenu ? "-rotate-45 -translate-y-2" : ""
                } w-4 h-px transition-transform bg-foreground-primary`}
            />
        </button>
    );
}
