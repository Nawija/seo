"use client";
import Lottie from "lottie-react";
import animationData from "../../public/heroAnim.json";

export default function Home() {
    return (
        <div className="wrapper">
            <section className="py-10 relative flex items-center justify-center">
                <div>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad et modi debitis magnam amet molestiae perspiciatis velit odit</h1>

                </div>
                <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center h-80"
                    loop={true}
                />
            </section>
        </div>
    );
}
