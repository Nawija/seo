import AutoCarouselInfoHero from "@/components/AutoCarouselInfoHero";
import Browser from "@/components/Browser";
import { MainBtn } from "@/components/Buttons/MainBtn";
import { NeonBtn } from "@/components/Buttons/NeonBtn";
import SubscribeNewsletter from "@/components/Newsletter/SubscribeNewsletter";
import H1 from "@/components/Titles/H1";

export default async function Home() {
    return (
        <div className="anim-opacity pt-12 lg:py-20 relative w-full h-full">
            <section className="space-y-16 lg:space-y-24 relative">
                <div className="space-y-6">
                    <H1>Lorem ipsum is placeholder Seovileo Commonly</H1>
                    <p className="text-foreground-secondary font text-sm lg:text-lg max-w-screen-md mx-auto text-center px-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur cumque labore sit accusamus temporibus
                        tenetur, eius consectetur, esse modi at, corrupti
                        mollitia!
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <MainBtn>Gallery</MainBtn>
                        <NeonBtn>Show More</NeonBtn>
                    </div>
                </div>
                <AutoCarouselInfoHero />
                <Browser />

                <div className="max-w-screen-md mx-auto">
                    <p>Zapisz sie do naszego newslettera aby dostac kupon -400zł</p>
                    <SubscribeNewsletter />
                </div>
            </section>
        </div>
    );
}
