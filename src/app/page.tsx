import AutoCarouselInfoHero from "@/components/AutoCarouselInfoHero";
import Browser from "@/components/Browser";
import { MainBtn } from "@/components/Buttons/MainBtn";
import { NeonBtn } from "@/components/Buttons/NeonBtn";
import { getSession } from "next-auth/react";
import H1 from "@/components/Titles/H1";

export default async function Home() {
    const session = await getSession();

    if (!session) {
        return <p className="text-center text-3xl py-24">Access Denied. Please login.</p>;
    }
    return (
        <div className="anim-opacity pt-12 lg:pt-20 relative w-full h-full">
            <section className="space-y-16 lg:space-y-24 relative">
                <div className="space-y-6">
                    <H1>Lorem ipsum is placeholder Seovileo Commonly</H1>
                    <p className="text-foreground-secondary font text-sm lg:text-lg max-w-screen-md mx-auto text-center px-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur cumque labore sit accusamus temporibus
                        tenetur, eius consectetur, esse modi at, corrupti
                        mollitia!
                    </p>
                    <p>Welcome, {session.user?.email}!</p>
                    <div className="flex items-center justify-center space-x-2">
                        <MainBtn>Gallery</MainBtn>
                        <NeonBtn>Show More</NeonBtn>
                    </div>
                </div>
                <AutoCarouselInfoHero />
                <Browser />
            </section>

            <div className="h-[300vh]" />
        </div>
    );
}
