import { NAVIGATION_LINKSS } from "@/constants/routers";

export default function AutoCarouselInfoHero() {
    return (
        <div className="w-full overflow-hidden p-2 flex items-center justify-start max-w-screen-sm mx-auto mt-12 relative">
            <div className="bg-gradient-to-l from-background-primary via-transparent to-background-primary w-full h-full absolute left-0 top-0 z-10" />
            <div className="scroll-container">
                <div className="scroll-content">
                    {NAVIGATION_LINKSS.map((link, i) => (
                        <p key={i} className="navigation-link">
                            {link.name}
                        </p>
                    ))}
                    {NAVIGATION_LINKSS.map((link, i) => (
                        <p
                            key={i + NAVIGATION_LINKSS.length}
                            className="navigation-link"
                        >
                            {link.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
