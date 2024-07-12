import AutoCarouselInfoHero from "@/components/AutoCarouselInfoHero";
import Browser from "@/components/Browser";
import { MainBtn } from "@/components/Buttons/MainBtn";
import { SecondBtn } from "@/components/Buttons/SecondBtn";
import H1 from "@/components/Titles/H1";
import Link from "next/link";

export default function Home() {
    return (
        <div className="anim-opacity space-y-12 pt-12 lg:pt-20">
            <section className="space-y-6 lg:space-y-12 ">
                <H1>Lorem ipsum is placeholder Seovileo Commonly</H1>
                <p className="text-foreground-secondary font text-sm lg:text-lg max-w-screen-md mx-auto text-center px-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur cumque labore sit accusamus temporibus tenetur,
                    eius consectetur, esse modi at, corrupti mollitia!
                </p>
                <div className="flex items-center justify-center space-x-2">
                    <MainBtn>Grafika</MainBtn>
                    <SecondBtn>Wycena</SecondBtn>
                </div>
                <AutoCarouselInfoHero />
                <Browser />
            </section>

                <div className="h-[300vh]" />
        </div>
    );
}
