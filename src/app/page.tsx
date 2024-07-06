"use client";
import Lottie from "lottie-react";
import animationData from "../../public/heroAnim.json";
import Link from "next/link";

export default function Home() {
    return (
        <div className="anim-opacity">
            <section className="py-12 px-4 relative grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
                <div className="max-w-screen-sm text-center lg:text-start space-y-8 flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-4xl font-bold ">
                        Loredolor sit amet{" "}
                        <span className="text-accent-primary">consectetur</span>{" "}
                        adipisicing soluta ad et modi debitis{" "}
                        <span className="text-accent-primary">magnam</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolore sit minus similique cum quaerat, ratione,
                        qui corporis consequuntur dicta voluptatem quos illo
                        fuga, corrupti velit.
                    </p>
                    <div className="space-x-4 py-4 lg:mr-auto">
                        <Link
                            href="/"
                            className="py-2 px-6 border bg-background-primary rounded-xl border-foreground-primary font-medium"
                        >
                            Show info
                        </Link>
                        <Link
                            href="/"
                            className="py-2 px-6 border bg-background-primary rounded-xl border-accent-primary text-accent-primary font-medium"
                        >
                            More
                        </Link>
                    </div>
                </div>

                <div className="lg:h-[600px]">
                    <Lottie
                        animationData={animationData}
                        className="flex justify-center items-center w-full h-full"
                        loop={true}
                    />
                </div>
            </section>
            <section className="py-20 bg-background-primary">
                <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-32 border rounded-xl"></div>
                </div>
            </section>
        </div>
    );
}
