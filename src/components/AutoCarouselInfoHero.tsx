import { NAVIGATION_LINKS } from "@/constants/routers";

export default function AutoCarouselInfoHero() {
    return (
        <div className="w-full overflow-hidden p-2 flex items-center justify-start space-x-6 max-w-screen-md mx-auto mt-12 relative">
            <div className="bg-gradient-to-l from-background-primary via-transparent to-background-primary w-full h-full absolute left-0 top-0"></div>
            {NAVIGATION_LINKS.map((link) => (
                <p>{link.name}</p>
            ))}
            {NAVIGATION_LINKS.map((link) => (
                <p>{link.name}</p>
            ))}
            {NAVIGATION_LINKS.map((link) => (
                <p>{link.name}</p>
            ))}
            {NAVIGATION_LINKS.map((link) => (
                <p>{link.name}</p>
            ))}
            {NAVIGATION_LINKS.map((link) => (
                <p>{link.name}</p>
            ))}
        </div>
    );
}
